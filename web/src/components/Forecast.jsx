import HourlyForecastWidget from './HourlyForecastWidget'
import DailyForecastWidget from './DailyForecastWidget'

const Forecast = ({title, type, data}) => {
  return (
    <div className='mt-8 select-none'>
        <div className='flex items-center overflow-hidden mt-2 pt-6'>
            <h3>{title}</h3>
            <div className='relative cursor-pointer flex flex-col items-center p-3 me-3 min-w-28 border border-solid border-[#65676b] dark:border-[#b0b3b8] rounded-2xl'>
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