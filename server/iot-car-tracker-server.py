from aiohttp import web
import socketio
import obd

sio = socketio.AsyncServer(async_mode='aiohttp', logger=True,
                           engineio_logger=True, cors_allowed_origins=['http://localhost:4200'])

app = web.Application()
sio.attach(app)

connection = obd.OBD("/dev/rfcomm99")#, timeout=1)

def readCarStatus(self):
    gasLevel = connection.query(obd.commands.FUEL_LEVEL)
    print(gasLevel)
    gearSelected = connection.query(obd.commands[1][164])
    print(gearSelected)
    odometer = connection.query(obd.commands[1][166])
    print(odometer)
    speed = connection.query(obd.commands.SPEED)
    print(speed)
    vin = connection.query(obd.commands[9][2])
    print(vin)
    return {
        "gasLevel": "40",
        "gearSelected": "Park",
        "location": {"latitude": "40", "longitude": "80"},
        "odometer": "125000",
        "speed": "0",
        "time": "6:32",
        "vin": "31231241412"
    }


trips_json = [
    {
        "startDateTime": "a",
        "endDateTime": "b",
        "startLocation": {"latitude": "40", "longitude": "80"},
        "endLocation": {"latitude": "40", "longitude": "80"},
        "startMileage": "c",
        "endMileage": "d",
        "updatesReceived": "e",
        "gasUsed": "f",
        "averageSpeed": "g",
    },
    {
        "startDateTime": "aa",
        "endDateTime": "bb",
        "startLocation": {"latitude": "40", "longitude": "80"},
        "endLocation": {"latitude": "40", "longitude": "80"},
        "startMileage": "cc",
        "endMileage": "dd",
        "updatesReceived": "ee",
        "gasUsed": "ff",
        "averageSpeed": "gg",
    }
]


@sio.on('getCarStatus')
async def handle_message(self):
    print("Sending car status")
    await sio.emit('carStatus', readCarStatus())


@sio.on('getTrips')
async def handle_message(self):
    print("Sending trips")
    await sio.emit('trips', trips_json)

if __name__ == '__main__':
    web.run_app(app, host="localhost", port=4444)
