
import Link from 'next/link'

const ComingSoonPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
      <h1 className='text-4xl font-bold mb-4'>Coming Soon</h1>
      <p className='text-lg mb-8'>This project is currently under development. Please check back later!</p>
      <Link href='/' className='btn-primary'>
        Go Back to Homepage
      </Link>
    </div>
  )
}

export default ComingSoonPage
