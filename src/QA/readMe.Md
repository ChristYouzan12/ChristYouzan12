## cypress run mode via Cli

`npx cypress run`

#record your test
npx cypress run --record --key 2d73989b-e31b-4914-878a-6d6d1230b04c

<!-- npx cypress run --record --key 93546eb8-03a0-4d26-999b-02b708e59dbd -->

do more with interface && connect GitHub

## object types in typeScript - useful to define types and value all in one

const car: { type: string, model: string, year: number } = {
type: "Toyota",
model: "Corolla",
year: 2009
};

millage ? = optional type

##enum - useful to define data that can't be changed only comes in numeric and string
enum StatusCodes {
NotFound = 404,
Success = 200,
Accepted = 202,
BadRequest = 400
}

## union Type myVar : boolean | string or number | string

## void type don't need the return statement

ci = continuos integration cd = continuos delivery

<!-- passing based url trough cli -->

npx cypress open --config baseUrl=https://staging.example.com

setUpNodeEvents

# will use http://localhost:3000

npx cypress open --env version="local"

# will use http://staging.example.com

npx cypress open --env version="staging"

# will use http://example.com

npx cypress open --env version="prod"

# will use fallback to http://localhost:3000

npx cypress open

## environment variable

      // const url = {
      //   prod: "https://www.myndup.com/",
      //   // local: `https://www.myndup.com/${bookingArg}`,
      //   local: "http://localhost:3000",
      //   bookDemo: `https://www.myndup.com/${bookDemo}`,
      // };

      // config.baseUrl = url[version];
      // config.env.sharedSecret =
      //   process.env.NODE_ENV === "qa" ? "hoop brick tort" : "sushi cup lemon";

### best practice for selectors

Basically, it is a decision that team should take while developing front end application that all testable elements should have proper data-cy or data-test-id which gives more information about the element and it makes easy to write more stable and readable tests.

writing tags
cypress run --tag <tag>
Add a tag or tags to the recorded run. This can be used to help identify separate runs when displayed in Cypress Cloud.

cypress run --record --tag "staging"

Run tests with edge case in the name in headless mode
$ npm run cypress:run -- --env grep='edge case'

// npm test
// npm run test-watch
