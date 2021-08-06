const LOCATIONS = ['ajmer', 'alwar', 'banswara', 'baran', 'barmer', 'bharatpur', 'bhilwara', 'bikaner', 'bundi',  'chittorgarh', 'churu', 
'dausa', 'dholpur', 'dungarpur', 'ganganagar', 'hanumangarh', 'jaipur', 'jaisalmer', 'jalore', 'jhalawar', 'jhunjhunu', 'jodhpur', 
'karauli',  'kota', 'nagaur', 'pali', 'pratapgarh', 'rajsamand', 'sawai madhopur', 'sikar', 'sirohi','tonk', 'udaipur'];

const ROUTES = [[6, 16, 24, 25, 27, 31], [5, 11, 16], [13, 26, 32], [19, 23], [17, 18, 21, 25], [1, 11, 12, 22], [0, 8, 9, 27, 31],[10, 14, 15, 17, 21, 24], 
[0, 6, 9, 23, 31],[6, 8, 23, 27], [7, 14, 15, 20, 24, 29,], [1, 5, 16, 22, 28], [5, 22], [2, 26, 32], [7, 15], [7, 10, 14], [0, 1, 11, 24, 28, 29, 31],
[4, 7, 21], [4, 21, 25, 30], [3, 23], [10, 29], [4, 7, 17, 18, 24, 25], [5, 11, 12, 28], [3, 8, 9, 19], [0, 7, 10, 16, 21, 25, 29],[0, 4, 18, 21, 24, 27, 30, 32], 
[2, 9, 32], [ 0, 6, 9, 25, 32 ], [ 11, 16, 22, 23, 31 ], [ 10, 16, 20, 24 ], [ 18, 25, 32 ], [0, 6, 8, 11, 16, 23, 28], [ 2, 9, 13, 25, 26, 27, 30 ]]; 

const SIGNAL_STRENGTH = ['poor', 'average', 'good', 'great', 'excellent']

module.exports = {
    locations: LOCATIONS,
    routes: ROUTES,
    signal_strength: SIGNAL_STRENGTH,
};
