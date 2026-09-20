export const overview={spotify:{records:149860,artists:4113,tracks:13839,skippedRate:5.25,from:2013,to:2024},household:{records:2461,from:2015,to:2018,expenseRecords:2176},india:{records:10267,from:2022,to:2024,totalAmount:48966073.38,avgAmount:5145.66}}
export const yearly=[
{year:2013,music:185,household:0,india:0},{year:2014,music:23,household:0,india:0},{year:2015,music:2809,household:182,india:0},{year:2016,music:6413,household:173,india:0},{year:2017,music:26320,household:568,india:0},{year:2018,music:14817,household:380,india:0},{year:2019,music:14927,household:0,india:0},{year:2020,music:24280,household:0,india:0},{year:2021,music:22991,household:0,india:0},{year:2022,music:16202,household:0,india:3303},{year:2023,music:11023,household:0,india:4799},{year:2024,music:9870,household:0,india:1315}]
export const artists=[['The Beatles',13621],['The Killers',6878],['John Mayer',4855],['Bob Dylan',3814],['Paul McCartney',2697],['Led Zeppelin',2482],['Johnny Cash',2478],['The Rolling Stones',2390]]
export const householdCats=[['Food',907],['Transportation',307],['Household',176],['subscription',143],['Other',126],['Investment',103],['Health',94],['Family',71]]
export const indiaCats=[['online_shopping',2596],['travel',2419],['entertainment',2388],['fitness_and_medical',2067]]
export const hours=[10884,9395,9029,8550,6355,7164,7369,4412,2312,1695,1207,903,724,1658,2759,3725,6737,9194,8945,8165,10494,8953,8715,10516]
export const connections=[
{title:'The overlap years',period:'2015 → 2018',text:'Music activity and household receipts overlap across four years, giving us a shared window where listening and everyday spending can be explored together.',tags:['Music','Household','2015–2018']},
{title:'A later chapter begins',period:'2022 → 2024',text:'The music history continues while the India transaction dataset introduces a second spending lens dominated by shopping, travel, entertainment, and fitness/medical activity.',tags:['Music','Transactions','2022–2024']},
{title:'Late-night listening',period:'00:00 → 02:59',text:'The Spotify records show a strong overnight listening footprint. This becomes a natural story thread for exploring time-of-day behaviour.',tags:['Music','Time','Night']},
{title:'Spending themes',period:'Everyday life',text:'Food and transportation lead the household categories, while online shopping, travel, and entertainment dominate the India transaction categories.',tags:['Food','Travel','Shopping']}
]
export const chapters=[
{n:'01',title:'The Early Signal',years:'2013–2014',text:'The archive begins quietly: a small number of music receipts establish the first trace of the story.',metric:'208 music receipts'},
{n:'02',title:'The Listening Years',years:'2015–2018',text:'Music activity rises sharply while household receipts provide a second view of everyday life. This is the strongest shared window between the first two datasets.',metric:'50,359 music + 1,303 household receipts'},
{n:'03',title:'The High-Activity Era',years:'2019–2021',text:'Music becomes a much larger part of the archive, with 2020 and 2021 standing out as especially active years.',metric:'62,198 music receipts'},
{n:'04',title:'A New Spending Lens',years:'2022–2024',text:'The later archive pairs music with a different transaction dataset, opening new threads around shopping, travel, entertainment, and fitness/medical spending.',metric:'37,095 music + 9,417 transactions'}
]
export const receiptExamples=[
{type:'music',icon:'♪',title:'The Beatles',detail:'13,621 listening receipts',date:'2013–2024',tag:'Most recurring artist'},
{type:'music',icon:'◒',title:'Late-night listening',detail:'10,516 plays around 23:00',date:'Across the archive',tag:'Time pattern'},
{type:'spend',icon:'₹',title:'Food',detail:'907 household receipts',date:'2015–2018',tag:'Top household category'},
{type:'spend',icon:'↗',title:'Online shopping',detail:'2,596 transactions',date:'2022–2024',tag:'Top transaction category'}
]
