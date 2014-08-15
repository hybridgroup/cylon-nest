# Commands

  ## structures()

  Gets all the structures of your home.

  ## structureName(structureId)

  Gets the name of a specific structure.

  ##### Params
  
  - **structureId** - The ID of the structure

  ##### Returns

  `nil`

  ## thermostats(structureId)

  Gets the thermostat of a specific structure.

  ##### Params

  - **structureId** - The ID of the structure

  ##### Returns

  `nil`

  ## smokeCoAlarms(structureId)

  Gets the smoke alarms of a specific structure.

  ##### Params

  - **structureId** - The ID of the structure

  ##### Returns
  
  `nil`

  ## away(structureId, val)

  Sets the device in away mode.

  ##### Params

  - **structureId** - The ID of the structure
  - **val**  - The value of the device

  ##### Returns

  `nil`

  ## eta(structureId)

   Sets the device a signal to prepare the home for the user's arrival.

  ##### Params
  
  - **structureId** - The ID of the structure
  
  ##### Returns
  
  `nil`

  ## read(key, structureId, callback)

  Reads a specific device.

  ##### Params

  - **key** - The key of the device
  - **value** - The value of the device
  - **callback** - The data of the callback

  ##### Returns

  `nil`

  ## write(key, value, structureId, callback)

  Writes a specific device.

  ##### Params 

  - **key** - The key of the device
  - **value** - The value of the device
  - **callback** - The data of the callback
  
  ##### Returns

  `nil`