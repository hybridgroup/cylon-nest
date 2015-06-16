/*
 * cylon-nest home commands
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
 */

"use strict";

module.exports = [
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
];
