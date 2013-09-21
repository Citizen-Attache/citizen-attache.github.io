var data = {
    project:[
                        {
            id: 3,
            title: 'Project 1a: Query and Parse IATI Data Into Canadian International Development Platform (CIDP) Web App',
            summary: 'An effort to parse IATI data into the existing CIDP back-end, and establish automated update.',
            submitter: {name:'Aniket Bhushan', org: 'North-South Institute', orgLink: 'http://nsi-ins.ca/'},
            descLong: ['We are interested in, and started building a web application, that would allow us to directly parse in, selectively, IATI data of use to us for further analysis and visualization. The key issue we faced was limiting the size of the query and parse in, and the time taken to execute. The main idea with the CIDP web application is to open up our backend (data warehouse) where we collect and post data from various sources, including on the ground projects. The application also allows users to “mash” datasets on common fields. The solution we’d like is one that allows us to limit what IATI data gets parsed in, and automates the update of the same, when donors post an update. '],
            links: [
                {name:'IATI Registry',link:'http://iatiregistry.org/'},
                {name:'CIDP',link:'http://cidpnsi.ca/'},
                {name:'CIDP Web App (Prototype)', link:'http://app.cidpnsi.ca/'}
            ],
            results: [
            ]
        },
          {
            id: 4,
            title: 'Project 1b: Working With Multiple Development Data APIs to Integrate with Canadian International Development Platform (CIDP) Web App',
            summary: 'Proof-of-concept integration between CIDP and multiple external data sources.',
            submitter: {name:'Aniket Bhushan', org: 'North-South Institute', orgLink: 'http://nsi-ins.ca/'},
            descLong: ['Proof-of-concept for solution that enables CIDP backend data management web application (see above) to link to and work with multiple development data APIs (e.g. WB, IATI, OECD-DAC). A number of our key data sources, e.g. World Bank data, are already linked via their API. This allows for current data to be presented. However what could be really useful is if a tool (or even a prototype of a tool) could be developed that allows us to work with multiple APIs. In the development data sector, in addition to the World Bank, OECD-DAC, IATI and others (such as research databases which have their own APIs) are important data providers. Bringing their data in via an API, and then restructuring such that the information can be managed around a simple schema (such as by country, or geography), and presenting it via a visualization for further use, could be a neat tool.'],
            links: [
                {name:'OECD Stats',link:'http://www.oecd.org/dac/stats/idsonline.htm"'},
                {name:'World Bank Data',link:'http://data.worldbank.org/node/9'},
                {name:'IATI Registry', link:'http://www.iatiregistry.org/registry-api'},
                {name:'IATI vs. CRS', link:'http://www.publishwhatyoufund.org/updates/by-topic/iati/crs-xml-iati-whats-big-difference/'}
            ],
            results: [
                {name:'GitHub',link:'https://github.com/murphy99/CIDP'}
            ]
        },
           
        {
            id: 2,
            title: 'Project 2: IATI Geocoding Short Cut',
            summary: 'A project to simplify and automate the geocoding of IATI data.',
            submitter: {name:'Aniket Bhushan', org: 'North-South Institute', orgLink: 'http://nsi-ins.ca/'},
            descLong: ['IATI data is at a detailed project level. Projects info is often at the subnational level. In order to map this information at specific locations, IATI data needs to be “geocoded”. There are detailed geocoding methodologies available, such as the one by DevGateway/AidData (link below). However, since much of the World Bank’s project dataset, comprising over 11,000 projects, has already been “geocoded” (see link), there may be potential to use this resource of comprehensive aid project latitude/longitude information, if a tool can be developed such that it queries relevant fields between donor (Canada) project level aid data (see CIDP link), and existing geocoded files to essentially piggy back on the info.'],
            links: [
                {name:'AidData Geocoding Overview',link:'http://www.aiddata.org/content/index/Services/geocoding'},
                {name:'World Bank Map Example',link:'http://maps.worldbank.org/sa/india'},
                {name:'Canada International Development Platform Map', link:'http://cidpnsi.ca/blog/portfolio/open-aid-data-explorer-canadian-aid-projects-around-the-world/'}
            ],
            results: []
        },

     {
            id: 5,
            title: 'Project 3: Facilitating the open data process for casual supporter',
            summary: 'Developing an approach to indexing and visualizing open survey data.',
            submitter: {name:'Rob Reid and Mark Boots', org: 'Voto Mobile', orgLink: 'http://www.votomobile.org/'},
            descLong: ["Open data can reduce redundancies in aid projects, fulfills a vital transparency and accountability role to the people, and provides a mine for researchers to draw novel conclusions from. Although there has been progress such as the International Aid Transparency Initiative standards and 25 national open data projects, most of which were launched in the last 3 years [1], there remains massive amounts of unshared data.','One barrier to sharing is easy integratability with providers' existing systems and formats. The research and engagement tool votomobile.org, for example,  has began encouraging open-data sharing by asking users to provide their raw data, but it does not currently have a system for adapting that data and sending to an existing centralized source where it is useful.','What sorts of tools could votomobile.org, or other actors in a similar position, use so that their data may be useful to others? Can this be made friendly-enough to be undertaken by organizations with limited computer literacy to involve actors like underbudgeted civil society organizations in developing countries to participate in the open data movement? Create one or more tools that could help Voto and the other organizations it references."],
            links: [],
            results: [
                {name:'Live Demo',link:'http://can-dev-hack.herokuapp.com/index.html#/'},
                {name:'Github',link:'https://github.com/Peak19/votoviz'}
            ]
        },
                {
            id: 6,
            title: "Project 4: Increase Canadian's Understanding of Canada's aid efforts",
            summary: "An attempt to make Canada's open aid data meaningful for Canadians",
            submitter: {name:'Ian Froude', org: 'Citizen Attaché', orgLink: ''},
            descLong: ["Over the last few years Canada has released multiple types of foreign aid data that can be interpreted and analyzed. But, Canadians don't always understand what Canada contributes to within international development, nor do many have the know-how to interpret or analyze the data. This challenge is to create a web or mobile application that presents Canadian aid data in a visual form that would be interesting for Canadians.','A potential first step on this project is to think about the types of questions Canadians ask about Canada's international aid efforts, and to design the application to answer those questions."],
            links: [
                {name:'AidView',link:'http://aidview.net/'},
                {name:'Visualizing IATI Data',link:'http://openforchange.info/content/visualising-iati-data-technical-newbies'},
                {name:'CIDP', link:'http://cidpnsi.ca/'},
                {name:'Eating My Own Dog Food', link:'http://tetrahedra.co.uk/eating-my-own-dogfood/'}
            ],
            results: [
                {name:'Live Demo',link:'http://touchedaide.u24.ca/api/'},
                {name:'GitHub',link:'https://github.com/collinglass/cdndevhack'}
            ]
        },
                {
            id: 7,
            title: 'Project 5: IATI CIDA Project Data Widget',
            summary: 'Embeddable Widgets to display specific IATI data in a website.',
            submitter: {name:'Michael Roberts', org: 'Acclar', orgLink: 'http://www.acclar.org'},
            descLong: ["The challenge is to develop a proof-of-concept tool that can search the IATI CIDA dataset and parse the resulting xml in order to display specific listings of project/activities that can then be embedded into a website as a javascript widget. Search criteria would be based on the fields in the schema as well as a keyword search.  [Ensure to keep the tool flexible so that more fields can be integrated as the IATI file expands.','The result allows a simple means to showcase related projects on a website to a particular topic of interest such as Canada’s involvement in health projects in Haiti. The project listing might also include a link that can then display the entire project in a separate window.','So for example, Dgroups.org is a space where a lot of development dialogue takes place. So if someone creates a dialogue space on AIDS in Mozambique, it would be useful to have a widget grab the related projects on AIDS in Mozambique for reference and have the dialogues and the project data sitting next to one another. Related, the same widget could be customized for CSOs or anyone who wants to have a webpage with a listing of specific projects next to it. So imagine a Wordpress widget. Someone simply configures it like an RSS feed, and suddenly, they will have a listing of projects on their website."],
            links: [
            ],
            results: [
                {name:'Live Demo',link:'http://iati-widget.herokuapp.com/'},
                {name:'Write-Up',link:'http://poeticeconomics.blogspot.ca/'}
            ]
        },
                {
            id: 8,
            title: 'Project 6a: Aid data gaps - A tool to show IATI data gaps in specific countries',
            summary: 'A tool to showcase areas of high and low coverage of IATI data worldwide.',
            submitter: {name:'Michael Roberts', org: 'Acclar', orgLink: 'http://www.acclar.org/'},
            descLong: ['Currently IATI data is not available in full coverage for many countries around the world.','This tool would compare the OECD/DAC datasets to the IATI ODA datasets for a particular aid recipient country and identify what gaps exist in the data completeness in a visual presentation. Its purpose is to help identify gaps for researchers and governments.','A related tool might also then be to create a top ten list of the countries with the most complete IATI coverage as well as those with the least coverage.'],
            links: [
            ],
            results: [
            ]
        } ,
                {
            id: 1,
            title: 'Project 6b: IATI frequency monitor',
            summary: 'A tool to visualize data update frequency in the IATI registry.',
            submitter: {name:'Aniket Bhushan', org: 'North-South Institute', orgLink: 'http://nsi-ins.ca/'},
            descLong: ['Develop a tool that simply monitors and identifies when a donor updates or posts new data to the registry, and visualizes the same info so that developers and others have a sense of how frequently which donors post to the registry. This could be useful as users want to know how timely a picture they are able to get –across different donors – by relying on their IATI feed.'],
            links: [
                {name:'OECD DAC Data Set',link:'http://www.oecd.org/dac/stats/data.htm'},
                {name:'IATI Registry',link:'http://www.iatiregistry.org/'},
                {name:'Publish What You Fund Aid Tracker', link:'http://tracker.publishwhatyoufund.org/publish/'}
            ],
            results: [
                {name:'Live Demo',link:'http://iatifreqs.ewb.ca/?path=donors&donor=dfid'},
                {name:'Github',link:'https://github.com/deniszgonjanin/iati_reporting_frequencies'}
            ]
        }      
    ]   
}