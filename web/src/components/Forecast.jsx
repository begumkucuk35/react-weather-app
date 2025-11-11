import HourlyForecastWidget from './HourlyForecastWidget'
import DailyForecastWidget from './DailyForecastWidget'
import HorizontallyScrollable from './HorizontallyScrollable'

const Forecast = ({title, type, data}) => {
  return (
    <div className='mt-8 select-none'>
        <div>
            <h3>{title}</h3>
            <HorizontallyScrollable className='flex items-center overflow-hidden mt-2 pt-6'>
                {data.map((data) => (
                    <div key={data.date || data.day}>
                        {type === 'hourly' ? (
                            <HourlyForecastWidget data={data}/>
                        ) : (
                            <DailyForecastWidget data={data}/>
                        ) }
                    </div>
                ))}
            </HorizontallyScrollable>
        </div>
    </div>
  )
}

export default Forecast