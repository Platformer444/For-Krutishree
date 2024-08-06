const MonthLenghtsNormal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const MonthengthsLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const RelationShipDate = {
    Year: 2024,
    Month: 4,
    Day: 8,
    Hour: 14,
    Minute: 26
};
const Days = [
    {
        Day: 'Anniversary',
        Date: { Day: 8 }
    },
    {
        Day: 'Birthday',
        Date: { Day: 19, Month: 10 }
    },
    {
        Day: 'Lover\'s Day',
        Date: { Day: 23, Month: 3 }
    },
    {
        Day: 'Valentines\' Day',
        Date: { Day: 14, Month: 2 }
    },
    {
        Day: 'Girlfriend Day',
        Date: { Day: 1, Month: 8 }
    },
    {
        Day: 'Best Friends Day',
        Date: { Day: 8, Month: 6 }
    },
    {
        Day: 'Friendship Day',
        Date: { Day: 4, Month: 8 }
    },
    {
        Day: 'Wife Day',
        Date: { Day: 23, Month: 6 }
    },
    {
        Day: 'Huggy Day',
        Date: { Day : 18 }
    },
    {
        Day: 'Kissy Day',
        Date: { Day : 19 }
    },
    {
        Day: 'Friendship and Confession Day',
        Date: { Day : 16 }
    }
];

function SetTime() {
    const TimeDIV = document.querySelectorAll('div.Time')[0];
    const DayText = document.querySelectorAll('span.DayText')[0];
    const TimeSpans = TimeDIV.children;

    const CurrentDate = new Date(Date.now());
    const TimeDifference = {
        Year: CurrentDate.getFullYear() - RelationShipDate.Year,
        Month: (CurrentDate.getMonth() - RelationShipDate.Month) + 1,
        Day: CurrentDate.getDate() - RelationShipDate.Day,
        Hour: CurrentDate.getHours() -  RelationShipDate.Hour,
        Minute: CurrentDate.getMinutes() - RelationShipDate.Minute
    };

    TimeSpans[0].textContent = String(TimeDifference.Year);
    TimeSpans[1].textContent = String(TimeDifference.Month);
    TimeSpans[2].textContent = String(TimeDifference.Day < 0 ? ((CurrentDate.getFullYear() % 4) === 0 ? MonthengthsLeap : MonthLenghtsNormal)[CurrentDate.getMonth()] + TimeDifference.Day : TimeDifference.Day);
    TimeSpans[3].textContent = String(TimeDifference.Hour < 0 ? 24 + TimeDifference.Hour  : TimeDifference.Hour);
    TimeSpans[4].textContent = String(TimeDifference.Minute < 0 ? 60 + TimeDifference.Minute : TimeDifference.Minute);
    TimeSpans[5].textContent = String(CurrentDate.getSeconds());

    Days.forEach((Day) => {
        if (Day.Date.Day === CurrentDate.getDate()) {
            if (Day.Date.Month) {
                if (Day.Date.Month === (CurrentDate.getMonth() + 1)) DayText.textContent = `Happy ${Day.Day}, Krutishree!`;
            }
            else DayText.textContent = `Happy ${Day.Day}, Krutishree!`;
        }
    });
}

function SetImage(ImageNum) {
    const Body = document.querySelectorAll('div.Container')[0];
    Body.style.backgroundImage = `url(./Images/${ImageNum === 1 ? 18 : ImageNum - 1}.jpg)`;

    const Image = document.querySelectorAll('img.RelationshipImage')[0];
    Image.setAttribute('src', `./Images/${ImageNum}.jpg`);
    Image.setAttribute('alt', String(ImageNum));
}

document.querySelectorAll('div.ImageChangeButton').forEach((Button) => {
    Button.addEventListener('click', (Event) => {
        const Image = document.querySelectorAll('img.RelationshipImage')[0];

        const CurrentImage = Number(Image.getAttribute('alt'));
        const Change = Number(Event.target.getAttribute('data-change'));

        let NewImage = CurrentImage + Change;
        if (NewImage < 1) NewImage = 18;
        else if (NewImage > 18) NewImage = 1;

        SetImage(NewImage);
    });
})

window.setInterval(SetTime, 1000);
SetImage(1);
