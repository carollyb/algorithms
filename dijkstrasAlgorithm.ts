/* Note that this array is an adjacent list, and it represents a graph.
 The number of vertices in the graph is equal to the length of edges, 
 where each index i in edges contains vertex i's outbound edges, 
 in no particular order. Each individual edge is represented by a pair of 
 two numbers, [destination, distance], where te destination is a positive 
 integer denoting the destination vertex and the distance is a positive 
 integer representing the length of the edge (the distance from vertex 
  i to vertex destination). Note that these edges are directed, meaning 
  that you can only travel from a particular vertex to its destination - 
  not the other way around (unless the destination vertex itself has an 
  outbound edge to the original vertex). */
