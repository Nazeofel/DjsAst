fetch("https://discord.com/api/v9/applications/1222491388084748319/proxy-config", {
    method: "POST",
    headers: {
        "Authorization": 'MTIyMjQ5MTM4ODA4NDc0ODMxOQ.GWrNTp.ZCegVig0-gb8B5L92P2_E9m5f7JCkYXfwI2Hl8'
    },
    body: JSON.stringify(
        
            [
                {
                    "prefix": "/",
                    "target": "lmao.com"
                },
        {
            "prefix": "/",
            "target": "idk.com"
        },
        {
            "prefix": "/",
            "target": "voluntary-ripe-prostate-champion.trycloudflare.com"
        },
        {
            "prefix": "/",
            "target": "guestbook-cope-long-minds.trycloudflare.com"
        }
    ]
)  
}).then((message) => console.log(message)).catch((err) => console.log(err))