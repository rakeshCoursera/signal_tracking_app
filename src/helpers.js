import { locations, routes } from "./constants";

const BFS = (adjList, src, dest, pred, dist) => {
  const nodes = adjList.length 
  let visited = new Array(nodes).fill(false);

  visited[src] = true
  dist[src] = 0

  let queue = []
  queue.push(src)

  while (queue.length){
    let node = queue[0]
    queue.shift();

    for (const vertex of adjList[node]){
      if (!visited[vertex]){
        visited[vertex] = true
        dist[vertex] = dist[node] + 1
        pred[vertex] = node
        queue.push(vertex)

        if (vertex === dest){
          return true
        }
      }
    }
  }

  return false
}

const getBestRoute = (source, destination) => {
  const nodes = routes.length 
  let predecessor = new Array(nodes).fill(-1);
  let distance = new Array(nodes).fill(1000000);

  const graph = BFS(routes, source, destination, predecessor, distance)

  if (!graph) {
    return []
  }

  let path = []
  let crawl = destination
  path.push(crawl)

  while (predecessor[crawl] !== -1){
    path.push(predecessor[crawl])
    crawl = predecessor[crawl]
  }

  return path
}

const getIndexByLocation = (place, start=0, end=32) => {
  if (start <= end) { 
    let mid = start + parseInt((end - start) / 2)

    if (locations[mid] === place){
      return mid
    } else if (locations[mid] > place){
      return getIndexByLocation(place, start, mid-1)
    } else {
      return getIndexByLocation(place, mid+1, end)
    }
  } 

  return -1
}

const getShortestPath = (src, dest) => {
  const srcIdx = getIndexByLocation(src);
  const destIdx = getIndexByLocation(dest);
  const path = getBestRoute(srcIdx, destIdx);
  return path.reverse().map((val) => locations[val]);
}

export default getShortestPath;