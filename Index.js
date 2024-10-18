const MonthLenghtsNormal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const MonthengthsLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const CurrentDate = new Date(Date.now());

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

const MaxImages = 22;

const Texts = [
    `
        It may seem like an usual day for other people but for them, Shrey and Krutishree, it was a day not like any other, a really special day. As they were walking down the stairs of the Aakash building, holding hands and completely alone, Shrey suddenly stopped and left her hand. Krutishree, standing towards the side of the wall saw him with her glowing eyes, wanting him to hold her hand.
        He said, “Come closer babe.” She moved towards him closer, making sure her body touched his. She said, “Am close baby.” She then looked up with her glowing eyes at him, wanting him to make the day special.
        He put his hands on both of her cheeks and started rubbing and playing with them. She gave out a bright smile and started to bring his head closer to hers as she was craving for his lips. He resisted this pull and kept playing with her cheeks. He set her hair behind her ear. She then held him by his neck and he held her by her waist and then pulls her closer to him so the bodies touch each other's. He then pushes her against the wall.
        He looked deep into her glowing eyes and then closed his own eyes. He started to lick and circle her pink and soft lips and  then tried to force his tongue into her mouth. She just closed her eyes, gave up all resistance and let him do his thing which gives her extreme pleasure.
        He forced his tongue inside her mouth and then started to play with her tongue and eating her soft lips too. She also started doing the same, not stopping at any point of time as she felt the immense pleasure in it as well as blushing more than she ever has. She loved the company given to her tongue by his in her mouth and continued playing with it. Both of them make each other’s lips wet and soaked by their tongue.
        Meanwhile, he started rubbing her back and then slowly moved his hands towards her cheeks again and started to rub them too to feel her soft skin. She held his neck softly while violently kissing him to make him feel pleasure. He set her hair behind her ear which was coming in the way of him feeling her soft cheeks. Then he again started to hold her by her waist and then lifts her shirt a little to tickle her in her tummy. She got really shy and started to blush like hell but continued kissing him, playing with his tongue and eating his lips. The same things were being done by him along with the tickling in which he felt extreme pleasure. 
        He then holds her by her head again and forces it into his head to get a better grasp at kissing her. He then holds her by her waist again and then completely leans into her, pushing her against the wall. She got more deeper with the kiss, licking, eating and completely wetting his lips. Their bodies completely touched each other’s. He then lifted her shirt again to rub her tummy a bit to feel her soft skin. As always, she blushed, turning completely red.
        He then held her by her face yet again and tried to get this tongue outside her mouth to lick and kiss her cheeks. She resisted it and continued kissing him violently while also blushing. After another try, she let him get it out and played with it one last time. He got it out and started to lick her lips by circling it. He then started to move his tongue towards her cheek, completely wetting the soft skin in its way. He then started to lick her cheeks and kissing it randomly on between. He completely made it wet by his tongue as he tasted her soft skin.
        He then kissed it and then left her cheek to look at her blushing and becoming a tomato. She opened her eyes to see why he stopped. He looked deep into those glowing eyes, which demanded him to continue as she felt the extreme pleasure in it. He closed his eyes and dived straight for the other cheek, giving it the same treatment as the last one, that is, completely wetting it by his tongue and kissing it. He slowly moved down towards her neck with his tongue completely wetting the skin as she felt immense pleasure and shyness. He started to lick and kiss her neck as he did with the cheeks. He completely made the skin wet. She felt extreme pleasure with his every touch oh her skin. He then accidentally bit her which made him check on her if he bit too hard. She gave the sign to continue and he continued his thing.
        He then started to move towards her cheek and did everything again to make her feel good. He then licked his way to her lips which he licked again. He did the usual eating and biting her lips which she followed too. Then he held her by her head and pushed it into his to get a soft kiss on the lips and also play with each other’s tongue a little. Then he let the grip off her and looked at her who was blushing completely red in her glowing eyes.
        He said, “I love you.” She said, “I love you too”
        Both of them held each other's hand and went their way saying ‘I love you’ to each other.
    `
];

const Checklist = {
    "1 Month": (CurrentDate.getMonth() - RelationShipDate.Month) + 1 >= 1,
    "6 Months": (CurrentDate.getMonth() - RelationShipDate.Month) + 1 >= 6,
    "1 Year": CurrentDate.getFullYear() - RelationShipDate.Year >= 1,
    "2 Years": CurrentDate.getFullYear() - RelationShipDate.Year >= 2,
    "5 Years": CurrentDate.getFullYear() - RelationShipDate.Year >= 5,
    "10 Years": CurrentDate.getFullYear() - RelationShipDate.Year >= 10,
    "Marriage": false
};

function SetTab(Tab) {
    document.querySelectorAll('div.SelectionButton').forEach((Button) => {
        const DIV = document.querySelectorAll(`div.${Button.textContent}`)[0];

        if (Button.textContent === Tab) {
            Button.classList.add('Active');
            DIV.style.display = 'block';
        } else {
            Button.classList.remove('Active');
            DIV.style.display = 'none';
        }
    });
}

function SetTime() {
    const TimeDIV = document.querySelectorAll('div.Time')[0];
    const DayText = document.querySelectorAll('span.DayText')[0];
    const TimeSpans = TimeDIV.children;

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

    TimeDIV.childNodes.forEach((TimeSpan) => {
        if (TimeSpan.textContent.length === 1) TimeSpan.textContent = '0' + TimeSpan.textContent;
    })

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
    Body.style.backgroundImage = `url(./Images/${ImageNum === 1 ? MaxImages : ImageNum - 1}.jpg)`;

    const Image = document.querySelectorAll('img.RelationshipImage')[0];
    Image.setAttribute('src', `./Images/${ImageNum}.jpg`);
    Image.setAttribute('alt', String(ImageNum));
}

function SetText(TextNum) {
    const Text = document.querySelectorAll('div.TextContainer')[0];
    Text.setAttribute('data-text', String(TextNum));
    Text.textContent = Texts[TextNum - 1]
}

function SetChecklist() {
    const List = document.querySelectorAll('ul.ChecklistContainer')[0];

    Object.keys(Checklist).forEach((Entry) => {
        const Item = document.createElement('li');
        Item.textContent = Entry + ": " + (Checklist[Entry] ? '✅' : '❌');
        List.appendChild(Item);
    });
}

function ImageAuto() {
    const Image = document.querySelectorAll('img.RelationshipImage')[0];
    let ImageNum = 0;

    if (Image.getAttribute('alt')) ImageNum = Number(Image.getAttribute('alt')) + 1;
    else ImageNum = 1;

    if (ImageNum > MaxImages) ImageNum = 1;

    SetImage(ImageNum);
}

document.querySelectorAll('div.Image.ChangeButton').forEach((Button) => {
    Button.addEventListener('click', (Event) => {
        const Image = document.querySelectorAll('img.RelationshipImage')[0];

        const CurrentImage = Number(Image.getAttribute('alt'));
        const Change = Number(Event.target.getAttribute('data-change'));

        let NewImage = CurrentImage + Change;
        if (NewImage < 1) NewImage = MaxImages;
        else if (NewImage > MaxImages) NewImage = 1;

        SetImage(NewImage);
    });
});
document.querySelectorAll('div.Text.ChangeButton').forEach((Button) => {
    Button.addEventListener('click', (Event) => {
        const Text = document.querySelectorAll('div.TextContainer')[0];

        const CurrentText = Number(Text.getAttribute('data-text'));
        const Change = Number(Event.target.getAttribute('data-change'));

        let NewText = CurrentText + Change;
        if (NewText < 1) NewText = Texts.length;
        else if (NewText > Texts.length) NewText = 1;

        SetText(NewText);
    });
});

document.querySelectorAll('div.SelectionButton').forEach((Button) => {
    Button.addEventListener('click', (Event) => { SetTab(Event.target.textContent); });
});

SetTab('Images')
SetImage(1);
SetText(1);
SetChecklist();
window.setInterval(SetTime, 1000);
window.setInterval(ImageAuto, 5000);
