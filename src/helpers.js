const ROUTES = {
    'ajmer': ['bhilwara', 'jaipur', 'nagaur', 'pali', 'rajsamand', 'tonk'],
    'alwar': ['bharatpur', 'dausa', 'jaipur'],
    'banswara': ['dungarpur', 'pratapgarh', 'udaipur'],
    'baran': ['jhalawar', 'kota'],
    'barmer': ['jaisalmer', 'jalore', 'jodhpur', 'pali'],
    'bharatpur': ['alwar', 'dausa', 'dholpur', 'karauli'],
    'bhilwara': ['ajmer', 'bundi', 'chittorgarh', 'rajsamand', 'tonk'],
    'bikaner': ['churu', 'ganganagar', 'hanumangarh', 'jaisalmer', 'jodhpur', 'nagaur'],
    'bundi': ['ajmer', 'bhilwara', 'chittorgarh', 'kota', 'tonk' ],
    'chittorgarh': ['bhilwara', 'bundi', 'kota', 'rajsamand' ],
    'churu': ['bikaner', 'ganganagar', 'hanumangarh', 'jhunjhunu', 'nagaur', 'sikar',],
    'dausa': ['alwar', 'bharatpur', 'jaipur', 'karauli', 'sawai madhopur'],
    'dholpur': ['bharatpur', 'karauli'],
    'dungarpur': ['banswara', 'pratapgarh', 'udaipur'],
    'ganganagar': ['bikaner', 'hanumangarh'],
    'hanumangarh': ['bikaner', 'churu', 'ganganagar'],
    'jaipur': ['ajmer', 'alwar', 'dausa', 'nagaur', 'sawai madhopur', 'sikar', 'tonk'],
    'jaisalmer': ['barmer', 'bikaner', 'jodhpur'],
    'jalore': ['barmer', 'jodhpur', 'pali', 'sirohi'],
    'jhalawar': ['baran', 'kota'],
    'jhunjhunu': ['churu', 'sikar'],
    'jodhpur': ['barmer', 'bikaner', 'jaisalmer', 'jalore', 'nagaur', 'pali'],
    'karauli': ['bharatpur', 'dausa', 'dholpur', 'sawai madhopur'],
    'kota': ['baran', 'bundi', 'chittorgarh', 'jhalawar'],
    'nagaur': ['ajmer', 'bikaner', 'churu', 'jaipur', 'jodhpur', 'pali', 'sikar'], 
    'pali': ['ajmer', 'barmer', 'jalore', 'jodhpur', 'nagaur', 'rajsamand', 'sirohi', 'udaipur'],
    'pratapgarh': ['banswara', 'chittorgarh', 'udaipur'],
    'rajsamand': [ 'ajmer', 'bhilwara', 'chittorgarh', 'pali', 'udaipur' ],
    'sawai madhopur': [ 'dausa', 'jaipur', 'karauli', 'kota', 'tonk' ],
    'sikar': [ 'churu', 'jaipur', 'jhunjhunu', 'nagaur' ],
    'sirohi': [ 'jalore', 'pali', 'udaipur' ],
    'tonk': ['ajmer', 'bhilwara', 'bundi', 'dausa', 'jaipur', 'kota', 'sawai madhopur'],
    'udaipur': [ 'banswara', 'chittorgarh', 'dungarpur', 'pali', 'pratapgarh', 'rajsamand', 'sirohi' ],
}

const SIGNAL_STRENGTH = ['poor', 'average', 'good', 'great', 'excellent']

const SIGNAL_STRENGTH_BY_LOCATION = Object.keys(ROUTES).reduce((accumulator, key) => {
    accumulator[key] = SIGNAL_STRENGTH[Math.floor(4 * Math.random())]
    return accumulator
}, {})

export default {
    routes: ROUTES,
    loc_signal_strength: SIGNAL_STRENGTH_BY_LOCATION
};
