const countries = [
    {name: 'United States', timezone: 'America/New_York'},
    {name: 'Canada', timezone: 'America/Toronto'},
    {name: 'United Kingdom', timezone: 'Europe/London'},
    {name: 'Germany', timezone: 'Europe/Berlin'},
    {name: 'France', timezone: 'Europe/Paris'},
    {name: 'Japan', timezone: 'Asia/Tokyo'},
    {name: 'Australia', timezone: 'Australia/Sydney'},
    {name: 'India', timezone: 'Asia/Kolkata'},
    {name: 'Brazil', timezone: 'America/Sao_Paulo'},
    {name: 'South Africa', timezone: 'Africa/Johannesburg'},
    {name: 'Argentina', timezone: 'America/Argentina/Buenos_Aires'},
    {name: 'Mexico', timezone: 'America/Mexico_City'},
    {name: 'China', timezone: 'Asia/Shanghai'},
    {name: 'South Korea', timezone: 'Asia/Seoul'},
    {name: 'Italy', timezone: 'Europe/Rome'},
    {name: 'Spain', timezone: 'Europe/Madrid'},
    {name: 'Russia', timezone: 'Europe/Moscow'},
    {name: 'Singapore', timezone: 'Asia/Singapore'},
    {name: 'Indonesia', timezone: 'Asia/Jakarta'},
    {name: 'Egypt', timezone: 'Africa/Cairo'},
    {name: 'Saudi Arabia', timezone: 'Asia/Riyadh'},
    {name: 'United Arab Emirates', timezone: 'Asia/Dubai'},
    {name: 'Turkey', timezone: 'Europe/Istanbul'},
    {name: 'Chile', timezone: 'America/Santiago'},
    {name: 'New Zealand', timezone: 'Pacific/Auckland'},
    {name: 'Pakistan', timezone: 'Asia/Karachi'},
    {name: 'Bangladesh', timezone: 'Asia/Dhaka'},
    {name: 'Thailand', timezone: 'Asia/Bangkok'},
    {name: 'Vietnam', timezone: 'Asia/Ho_Chi_Minh'},
    {name: 'Philippines', timezone: 'Asia/Manila'},
];

let currentIndex = 0;

function updateClock() {
    const country = countries[currentIndex];
    const options = {
        timeZone: country.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // 24-hour format for consistency
    };

    const timeString = new Intl.DateTimeFormat([], options).format(new Date());

    // Update the DOM with the country name and the corresponding time
    document.getElementById('country-name').innerHTML = country.name;
    document.getElementById('time-display').innerHTML = timeString;
}

function nextCountry() {
    currentIndex = (currentIndex + 1) % countries.length;
    updateClock();
}

function prevCountry() {
    currentIndex = (currentIndex - 1 + countries.length) % countries.length;
    updateClock();
}

document.getElementById('next-btn').addEventListener('click', nextCountry);
document.getElementById('prev-btn').addEventListener('click', prevCountry);
document.getElementById('refresh-btn').addEventListener('click', updateClock);

// Initial call to update the clock with the starting country
updateClock();

// Set an interval to update the clock every second
setInterval(updateClock, 1000);
