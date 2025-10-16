import HourlyForecastWidget from './HourlyForecastWidget'
import DailyForecastWidget from './DailyForecastWidget'

const Forecast = ({title, type, data}) => {
  return (
    <div className='mt-8 select-none'>
        <div>
            <h3>{title}</h3>
            <div className='flex items-center overflow-hidden mt-2 pt-6'>
                {data.map((data) => (
                    <div>
                        {type === 'hourly' ? (
                            <HourlyForecastWidget data={data}/>
                        ) : (
                            <DailyForecastWidget data={data}/>
                        ) }
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Forecast