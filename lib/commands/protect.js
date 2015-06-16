/*
 * cylon-nest protect commands
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
 */

"use strict";

module.exports = [
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
];
