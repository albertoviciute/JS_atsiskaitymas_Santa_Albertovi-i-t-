 let routes = [
    {
        route: 'Vilnius - Klaipėda',
        departure: '2024-03-09 08:00',
        duration: '3:00'
    },
    {
        route: 'Vilnius - Paris',
        departure: '2024-03-09 10:15',
        duration: '24:45'
    },
    {
        route: 'Vilnius - Kaunas',
        departure: '2024-03-09 12:15',
        duration: '0:45'
    },
    {
        route: 'Vilnius - Warsaw',
        departure: '2024-03-09 05:30',
        duration: '5:00'
    },
    {
        route: 'Šauliai - Venta',
        departure: '2024-03-09 17:45',
        duration: '0:30'
    },
    {
        route: 'Riga - Venice',
        departure: '2024-03-09 04:00',
        duration: '26:30'
    }
]

// 1.6t -Uždavinio sprendimas skaidomas į dalis –funkcijas(mažiausiai 3 funkcijos);

// Print main trip info
function printTripInfo(route, departure, duration, arrival) {
    console.log(`Route: ${route}, departure date and time: ${departure}, trip duration: ${duration}, expected arrival ${arrival}.`);
}

// Parste time from string to date obj format
function parseTime(departure) {
    return new Date(departure);
}

// Get durations in milisecs
function getDurationInSec(duration){
    let [hours, minutes] = duration.split(':');
    return (parseInt(hours, 10) * 60 + parseInt(minutes, 10)) * 60 * 1000;
}

// Calc and return arrival time from given departure and duration
function getArrival(departure, duration) {
    return new Date(departure.getTime() + getDurationInSec(duration));
}

// Format arrival info from date obj format into string format
function formatTime(time) {
    return `${time.getFullYear()}-${(time.getMonth() + 1).toString().padStart(2, '0')}-${time.getDate().toString().padStart(2, '0')} ${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;
}

// Return full string info about arrival time
function returnArrival(departure, duration) {
    let departureTime = parseTime(departure);
    let arrivalTime = getArrival(departureTime, duration);
    return formatTime(arrivalTime);
}

// Print all routes info about trip
function getAllRoutesInfo(routes){
    for (let i = 0; i < routes.length; i++) {
        let arrival = returnArrival(routes[i].departure, routes[i].duration);
        printTripInfo(routes[i].route, routes[i].departure, routes[i].duration, arrival);
    }
}

// getAllRoutesInfo(routes);

// 2.Papildomai aprašytos šios funkcijos:
// a.2t -Rasti trumpiausios kelionės duomenis(f)ir juos atspausdinti(visą informaciją apie maršrutą)(f);

// Print shortest route info about trip 
function printShortestTrip(routes){
    let shortest = routes[0];
    for (let i = 0; i < routes.length; i++) {
        if (shortest.duration > routes[i].duration) {
            shortest = routes[i];
        }
    }
    let arrival = returnArrival(parseTime(shortest.departure), shortest.duration);
    printTripInfo(shortest.route, shortest.departure, shortest.duration, arrival);
}

// printShortestTrip(routes);

// b.2t -Rasti ilgiausios kelionės duomenis(f)ir juos atspausdinti(visą informaciją apie maršrutą)(f);

function printLongestTrip(routes){
    let longest = routes[0];
    for (let i = 0; i < routes.length; i++) {
        if (longest.duration < routes[i].duration) {
            longest = routes[i];
        }
    }
    let arrival = returnArrival(parseTime(longest.departure), longest.duration);
    printTripInfo(longest.route, longest.departure, longest.duration, arrival);
}

//printLongestTrip(routes);

// c.2t -Rasti(f)ir atspausdinti(visą informaciją apie maršrutus)(f)tik tas keliones, kurios truko ilgiau nei para;

function printLongerThanDayTrip(routes){
    let day = 24 * 60 * 60 * 1000;
    for (let i = 0; i < routes.length; i++) {
        debugger;
        let duration = getDurationInSec(routes[i].duration);
        if (duration > day){
            let arrival = returnArrival(parseTime(routes[i].departure), routes[i].duration);
            printTripInfo(routes[i].route, routes[i].departure, routes[i].duration, arrival);
        }
    }
}

// printLongerThanDayTrip(routes);