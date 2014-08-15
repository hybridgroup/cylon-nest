# Commands

## deviceName()

Gets the name of the nest

## ambientTemperatureF()

Gets the ambient temperature in Fº

## ambientTemperatureC()

Gets the ambient temperature in Cº

## targetTemperatureF()

Gets the target temperature in Fº

## targetTemperatureC()

Gets the ambient temperature in Cº

## setTargetTemperatureF(value)

Sets the target temperature in Fº

##### Params

- **value** - The value for the temperature

##### Returns

`nil`

## setTargetTemperatureC(value)

Sets the target temperature in Cº

##### Params

- **value** - The value for the temperature

##### Returns

`nil`

## read(key, callback)

Reads the params of the device.

#####Params

- **key** - The key of the device
- **callback** - The data of the callback

##### Returns

`nil`

## write(key, value, callback)

Writes the params of the device.

##### Params

- **key** - The key of the device
- **value** - The value of the device
- **callback** - The data of the callback

##### Returns

`nil`