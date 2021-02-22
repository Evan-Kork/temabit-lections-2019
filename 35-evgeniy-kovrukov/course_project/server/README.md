# PROJECT ADDITIONS FOR OPENAPI JUSTIN
*author: Mikhail Biloshkyrskiyy*

### Libraries and frameworks that were used in this project
1. Node
2. Express
3. Cors
4. Webpack v.4+
5. Babel (browser support last 5 versions) v.7+

### Project Deployment
1. In webpack.config.js, set the proxy to devServer!!!!!!!
    1.  proxy: {
            '/api': 'http://localhost:5000'
        }
1. Clone repository
2. Package installation (terminal -> npm install)
3. We start the server (terminal -> npm run dev)
### Request Example
1.  An example of a server request ->
    1.1 request.get(`/api/branches`)
    1.2 request.get(`/api/branches/220`)
2.  Post request
    2.1 request.post(`/api/branches/220`).send({"locality":"Київ"})
### Request

#### Branches
1) GET /api/branches - all branches in Ukraine
2) GET /api/branches/:id -
    1. All branches in Ukraine
    2. URL params -> id -> (/api/branches/220)
3) POST /api/branches/locality -
    1. Indicate the city and finds the entire branch of the city
    2. Body options -> locality=Київ
4) POST /api/branches/locator -
    1. Indicate the city, street, house and find the nearest branch
    2. Body options -> locality=Київ,Шевченка,30
5) GET /api/branches/types
    1. Information about tipi viddilen

#### Tracking
6) GET /api/tracking/:number
    1. Departure movement history
    2. URL params -> number -> (/api/tracking/201810165)
7) GET /api/tracking/history/:number
    1. Departure movement history
    2. URL params -> number -> (/api/tracking/history/201810165)

#### Localities
8) GET /api/localities/
    1. Information about settlements
9) GET /api/localities/all
    1. Information about settlements
10) GET /api/localities/activity
    1. Information on settlements in which the branch is currently operating

#### Services
11) GET /api/services/
    1. Information about available services
