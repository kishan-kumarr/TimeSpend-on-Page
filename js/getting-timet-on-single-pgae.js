const gettingSinglePageTiming = (pageName) => {
    
    let path = window.location.pathname;
    let page = path.split("/").pop();
    page = page.split(".")[0];


    pageName  = !pageName ?  page[0].toUpperCase() + page.slice(1)+ " Page" : pageName;

    // if(pageName === undefined || pageName === ""){
    //     throw new Error("Page name required -- so that we can show how much time spend by user on this page")
    //}

    document.addEventListener("DOMContentLoaded", () => {
        alert()
        const start = new Date().getTime();
        window.addEventListener("beforeunload", () => {
            const end = new Date().getTime();
            const totalTime = (end - start) / 1000
        
            localStorage.setItem(pageName, JSON.stringify(Math.round(totalTime)));
        });
    });
}