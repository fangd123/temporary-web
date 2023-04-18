import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Sengine Tech</title>
                <meta name="description" content="Sengine Tech"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
                <div className="bg-gray-200 p-10 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold mb-4">
                        We are developing the new website and will release it at the end of April.
                    </h1>
                    <p className="mb-4">
                        The previous version can be accessed at{" "}
                        <a href="http://47.92.31.60/" className="text-blue-500 underline cursor-pointer">
                            http://47.92.31.60/
                        </a>
                    </p>
                    <br/>
                    <p className="mb-4 italic">
                        Sengine Tech
                    </p>

                </div>
            </main>
        </>
    )
}
