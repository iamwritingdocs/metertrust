// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EnergyMetering {
    // State variables
    uint public meterReading; // the central value of meter reading
    bool public userApproved; // tracks if the user approved the reading
    bool public supplierApproved; // tracks if the supplier approved the reading
    address public validator; // the third-party validator
    address public user; // the user
    address public energySupplier; // the energy supplier

    // Modifiers for role-based functions
    modifier onlyUser() {
        require(msg.sender == user, "Caller is not the user");
        _;
    }

    modifier onlyEnergySupplier() {
        require(msg.sender == energySupplier, "Caller is not the energy supplier");
        _;
    }

    modifier onlyValidator() {
        require(msg.sender == validator, "Caller is not the validator");
        _;
    }

    // Constructor to set initial roles
    constructor(address _user, address _energySupplier, address _validator) {
        user = _user;
        energySupplier = _energySupplier;
        validator = _validator;
    }

    // Function to submit a meter reading
    function submitMeterReading(uint _meterReading) external onlyUser {
        meterReading = _meterReading;
        userApproved = true;
    }

    // User approves the meter reading
    function approveByUser() external onlyUser {
        require(!userApproved, "Already approved by user");
        userApproved = true;
    }

    // Energy supplier approves the meter reading
    function approveBySupplier() external onlyEnergySupplier {
        require(userApproved, "User has not approved yet");
        supplierApproved = true;
    }

    // Validator approves the meter reading in case of disputes
    function approveByValidator() external onlyValidator {
        if (!userApproved || !supplierApproved) {
            // Validator can approve if either user or supplier hasn't approved
            userApproved = true;
            supplierApproved = true;
        }
    }

    // Check if the reading is fully approved and can be confirmed on-chain
    function isReadingConfirmed() external view returns (bool) {
        return userApproved && supplierApproved;
    }
}
