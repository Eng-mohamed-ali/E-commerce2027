import Password from "../component/feartures";


// w-full max-w-md p-8 space-y-6 bg-transperent md:bg-white rounded-lg shadow-md

function AdminLogin() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-transperent md:bg-white rounded-lg md:shadow-md">
                <form className="space-y-7">
                    <h1 className="text-center font-bold text-xl">Admin Login</h1>
                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1" placeholder="email" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <Password />
                    </div>
                    <div>
                        <label htmlFor="pin" className="block mb-1 text-sm font-medium text-gray-700">PIN</label>
                        <input type="number" id="pin" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1" placeholder="****" />
                    </div>
                    <button className="w-full px-4 py-2 bg-[#FF6A00] text-white rounded-lg" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}


export default AdminLogin;