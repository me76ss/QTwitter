function Tweet() {
    return (
        <div className="flex flex-col border-2 box-content h-auto max-w-screen-md p-2 px-4 bg-black text-white rounded-3xl ">
            <div className="m-4 p-2 justify-center space-x-10 flow-root roun">
                <div className="flex flex-row float-left box-content space-x-2">
                    <div className="box-content p-2 py-3  bg-secondary rounded-2xl">
                        profileName:
                    </div>
                    <div className="bg-stone-900 h-8 w-44 box-content p-2 content-center rounded-md">mohammad</div>
                </div>

                <div className="flex flex-row float-right box-content space-x-2">
                    <div className="box-content p-2 py-3  bg-secondary rounded-2xl">
                        UserName:
                    </div>
                    <div className="bg-stone-900 h-8 w-44 box-content p-2 content-center rounded-md">me76ss</div>
                </div>
            </div>

            <div className="h-auto w-auto flex flex-row m-4">
                <div className="pr-4">tweet:</div>
                <div className="bg-stone-900 h-72 w-full break-inside-auto px-2 py-1 rounded-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse
                    beatae, provident, ex illum facere ut magnam perspiciatis voluptatibus
                    quam, odio tempora nihil amet totam eligendi explicabo? Fugiat,
                    dignissimos deleniti!
                </div>
            </div>
            <div className="flex flex-col box-content m-4 p-2 space-x-4 justify-between">
                <div className="flex space-x-2  m-3">
                    <div className="content-center bg-secondary rounded-2xl p-2 h-14 w-44 ">
                        tags:
                    </div>
                    <div className="bg-stone-900 h-10 w-44 box-content p-2 rounded-2xl content-center">rbwrwfefrb</div>
                    <div className="content-center  bg-secondary rounded-2xl p-2 h-14 w-44">
                        likes:
                    </div>
                    <div className="bg-stone-900 h-10 w-44 box-content p-2 rounded-2xl content-center">rbwwrqrwrb</div>
                </div>
                <div className="flex space-x-2  m-3">
                    <div className="content-center bg-secondary rounded-2xl p-2 h-14 w-44">
                        comments:
                    </div>
                    <div className="bg-stone-900 h-10 w-44 box-content p-2 rounded-2xl content-center">rb335wrwrb</div>
                    <div className="content-center  bg-secondary rounded-2xl p-2 h-14 w-44">
                        reply:
                    </div>
                    <div className="bg-stone-900 h-10 w-44 box-content p-2 rounded-2xl content-center">rbwgsfhrwrb</div>
                </div>
            </div>
        </div>
    );
}
export default Tweet;
