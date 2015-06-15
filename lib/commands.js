/*
 * cylon-nest commands
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/
"use strict";

module.exports = {
  /**
  * Returns the Nest Home Commands
  **/
  home: [
    /**
     * Returns all structures the Nest API knows about
     *
     * @return {Object} structures
     * @publish
     */
    "structures",
    /**
     * Gets a specific structure from the Structures reference
     *
     * @param {Number} structureId identifier of structure to get
     * @return {Object} structure
     * @publish
     */
    "getStructure",

    /**
     * Gets name of specified structure
     *
     * @param {Number} structureId identifier of structure to get
     * @return {String} structure name
     * @publish
     */
    "structureName",

    /**
     * Gets thermostats in specified structure
     *
     * @param {Number} structureId identifier of structure to get
     * @return {Object[]} structure thermostats
     * @publish
     */
    "thermostats",

    /**
     * Gets Smoke/Carbon Monoxide alarms in specified structure
     *
     * @param {Number} structureId identifier of structure to get
     * @return {Object[]} structure Smoke/C0 alarms
     * @publish
     */
    "smokeCoAlarms",

    /**
     * Gets devices in specified structure
     *
     * @param {Number} structureId identifier of structure to get
     * @return {Object[]} structure devices
     * @publish
     */
    "devices",

    /**
     * Gets the current `away` value of the structure, or assigns a new value if
     * provided
     *
     * @param {Number} val new value for `away`
     * @param {Number} structureId identifier of structure to get
     * @return {null|Number} structure `away` status
     * @publish
     */
    "away",

    /**
     * Gets ETA for specified structure or assigns a new value if
     * provided
     *
     * @param {Number} structureId identifier of structure to get
     * @return {Object[]} structure ETA
     * @publish
     */
    "eta",

    /**
     * Gets Country Code for specified structure
     *
     * @param {Number} structureId identifier of structure to get
     * @return {String} structure Country Code
     * @publish
     */
    "countryCode",

    /**
     * Gets Postal Code for specified structure
     *
     * @param {Number} structureId identifier of structure to get
     * @return {String} structure Postal Code
     * @publish
     */
    "postalCode",

    /**
     * Gets Peak Period Start Time for specified structure
     *
     * @param {Number} structureId identifier of structure to get
     * @return {String} structure Peak Period Start Time
     * @publish
     */
    "peakPeriodStartTime",

    /**
     * Gets Peak Period End Time for specified structure
     *
     * @param {Number} structureId identifier of structure to get
     * @return {String} structure Peak Period End Time
     * @publish
     */
    "peakPeriodEndTime",

    /**
     * Gets Time Zone for specified structure
     *
     * @param {Number} structureId identifier of structure to get
     * @return {String} structure Time Zone
     * @publish
     */
    "timeZone"
  ],
  /**
  * Returns the Nest Protect Commands
  **/
  protect: [
    /**
     * Returns the protect's locale
     *
     * @return {String} locale
     * @publish
     */
    "locale",
    /**
     * Returns the protect's software version
     *
     * @return {String} software version
     * @publish
     */
    "softwareVersion",

    /**
     * Returns the protect's structure id value
     *
     * @return {String} structure id
     * @publish
     */
    "structureId",

    /**
     * Returns the protect's name value
     *
     * @return {String} name
     * @publish
     */
    "deviceName",

    /**
     * Returns the protect's name long value
     *
     * @return {String} name long
     * @publish
     */
    "nameLong",

    /**
     * Returns the protect's last connection value
     *
     * @return {String} last connection
     * @publish
     */
    "lastConnection",

    /**
     * Returns the protect's is online value
     *
     * @return {Boolean} is online
     * @publish
     */
    "isOnline",

    /**
     * Returns the protect's battery health value
     *
     * @return {String} battery health
     * @publish
     */
    "batteryHealth",

    /**
     * Returns the protect's co alarm state value
     *
     * @return {String} co alarm state
     * @publish
     */
    "coAlarmState",

    /**
     * Returns the protect's smoke alarm state value
     *
     * @return {String} smoke alarm state
     * @publish
     */
    "smokeAlarmState",

    /**
     * Returns the protect's is manual test active value
     *
     * @return {Boolean} is manual test active
     * @publish
     */
    "isManualTestActive",

    /**
     * Returns the protect's last manual test time value
     *
     * @return {String} last manual test time
     * @publish
     */
    "lastManualTestTime",

    /**
     * Returns the protect's ui color state value
     *
     * @return {String} ui color state
     * @publish
     */
    "uiColorState"
  ],
  /**
  * Returns the Nest Thermostat Commands
  **/
  thermostat: [
    /**
     * Returns the thermostat's locale
     *
     * @return {String} locale
     * @publish
     */
    "locale",

    /**
     * Returns the thermostat's software version
     *
     * @return {String} software version
     * @publish
     */
    "softwareVersion",

    /**
     * Returns the thermostat's structure id value
     *
     * @return {String} structure id
     * @publish
     */
    "structureId",

    /**
     * Returns the thermostat's name value
     *
     * @return {String} name
     * @publish
     */
    "deviceName",

    /**
     * Returns the thermostat's name long value
     *
     * @return {String} name long
     * @publish
     */
    "nameLong",

    /**
     * Returns the thermostat's last connection value
     *
     * @return {String} last connection
     * @publish
     */
    "lastConnection",

    /**
     * Returns the thermostat's is online value
     *
     * @return {Boolean} is online
     * @publish
     */
    "isOnline",

    /**
     * Returns the thermostat's can cool value
     *
     * @return {Boolean} can cool
     * @publish
     */
    "canCool",

    /**
     * Returns the thermostat's can heat value
     *
     * @return {Boolean} can heat
     * @publish
     */
    "canHeat",

    /**
     * Returns the thermostat's is using emergency heat value
     *
     * @return {Boolean} is using emergency heat
     * @publish
     */
    "isUsingEmergencyHeat",

    /**
     * Returns the thermostat's has fan value
     *
     * @return {Boolean} has fan
     * @publish
     */
    "hasFan",

    /**
     * Returns the thermostat's fan timer active value
     * or assigns the new value if provided
     *
     * @param {Boolean} val new value for `fan_timer_active`
     * @return {Boolean} fan timer active
     * @publish
     */
    "fanTimerActive",

    /**
     * Returns the thermostat's fan timer timeout value
     *
     * @return {String} fan timer timeout
     * @publish
     */
    "fanTimerTimeout",

    /**
     * Returns the thermostat's has leaf value
     *
     * @return {Boolean} has leaf
     * @publish
     */
    "hasLeaf",

    /**
     * Returns the thermostat's temperature scale value
     *
     * @return {String} temperature scale
     * @publish
     */
    "temperatureScale",

    /**
     * Returns the current thermostat target temperature in Fahrenheit
     * or assigns the new value if provided
     *
     * @param {Number} val new value for `target_temperature_f`
     * @return {String} temp
     * @publish
     */
    "targetTemperatureF",

    /**
     * Returns the current thermostat target temperature in Celsius
     * or assigns the new value if provided
     *
     * @param {Number} val new value for `target_temperature_c`
     * @return {String} temp
     * @publish
     */
    "targetTemperatureC",

    /**
     * Returns the current thermostat target temperature high in Fahrenheit
     * or assigns the new value if provided
     *
     * @param {Number} val new value for `target_temperature_high_f`
     * @return {String} temp
     * @publish
     */
    "targetTemperatureHighF",

    /**
     * Returns the current thermostat target temperature high in Celsius
     * or assigns the new value if provided
     *
     * @param {Number} val new value for `target_temperature_high_c`
     * @return {String} temp
     * @publish
     */
    "targetTemperatureHighC",

    /**
     * Returns the current thermostat target temperature low in Fahrenheit
     * or assigns the new value if provided
     *
     * @param {Number} val new value for `target_temperature_low_f`
     * @return {String} temp
     * @publish
     */
    "targetTemperatureLowF",

    /**
     * Returns the current thermostat target temperature low in Celsius
     * or assigns the new value if provided
     *
     * @param {Number} val new value for `target_temperature_low_c`
     * @return {String} temp
     * @publish
     */
    "targetTemperatureLowC",

    /**
     * Returns the thermostat's away temperature high in Fahrenheit
     *
     * @return {String} temp
     * @publish
     */
    "awayTemperatureHighF",

    /**
     * Returns the thermostat's away temperature high in Celsius
     *
     * @return {String} temp
     * @publish
     */
    "awayTemperatureHighC",

    /**
     * Returns the thermostat's away temperature low in Fahrenheit
     *
     * @return {String} temp
     * @publish
     */
    "awayTemperatureLowF",

    /**
     * Returns the thermostat's away temperature low in Celsius
     *
     * @return {String} temp
     * @publish
     */
    "awayTemperatureLowC",

    /**
     * Returns the current thermostat hvac mode value
     * or assigns the new value if provided
     *
     * @param {String} val new value for `hvac_mode`
     * @return {String} hvac mode
     * @publish
     */
    "hvacMode",

    /**
     * Returns the thermostat's detected ambient temperature, in Fahrenheit
     *
     * @return {String} temp
     * @publish
     */
    "ambientTemperatureF",

    /**
     * Returns the thermostat's detected ambient temperature, in Celsius
     *
     * @return {String} temp
     * @publish
     */
    "ambientTemperatureC",

    /**
     * Returns the thermostat's detected humidity
     *
     * @return {String} humidity
     * @publish
     */
    "humidity",

    /**
     * Returns the thermostat's hvac state
     *
     * @return {String} hvac state
     * @publish
     */
    "hvacState"
  ]
};
