const START_DATE = new Date('2023-12-10')
const END_DATE = new Date('2026-09-02') // for charting purpose

const EPOCHS = [
	{
		days: 90,
		emissionsInDay: 403200,
	},
	{
		days: 90,
		emissionsInDay: 201600,
	},
	{
		days: 180,
		emissionsInDay: 22896,
	},
	{
		days: Number.MAX_SAFE_INTEGER,
		emissionsInDay: 2880,
	},
]

const date = START_DATE
let emission = 200
export const emissionSchedules = {
	dates: [date.toLocaleDateString('ko-KR')],
	values: [emission],
}

for (const epoch of EPOCHS) {
	for (let i = 0; i < epoch.days && date <= END_DATE; ++i) {
		emissionSchedules.dates.push(date.toLocaleDateString('ko-KR'))
		emissionSchedules.values.push((emission += epoch.emissionsInDay))
		date.setDate(date.getDate() + 1)
	}
}
