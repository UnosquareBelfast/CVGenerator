# CVGenerator

V1 of a Java and React project for generating employee CVs.

## Getting Started

The instructions below will get the project up and running on the frontend.

### Prerequisites

Make sure you have the following repos cloned in your project directory.

1. https://github.com/UnosquareBelfast/CVGenerator-backend
2. https://github.com/UnosquareBelfast/CVGenerator-tools
3. https://github.com/UnosquareBelfast/CVGenerator-frontend

#### Dependencies

[Node](https://nodejs.org/en/)
[Docker](https://docs.docker.com/install/#server)

After cloning the [frontend](https://github.com/UnosquareBelfast/CVGenerator-frontend) repo run `npm install` to get the project dependencies.

### Running the project

- create `imposter_rest` directory in the main project directory

  - inside this folder add create `example-data.json` and `rest-config.json` files
  - inside `rest-config.json` paste

```
    {
        "plugin": "com.gatehill.imposter.plugin.rest.RestPluginImpl",
        "path": "/cvdetails",
        "response": {
            "staticFile": "example-data.json"
        }
    }
```

- in [backend](https://github.com/UnosquareBelfast/CVGenerator-backend) checkout the `GeneratePDFAPI` branch

- in [tools](https://github.com/UnosquareBelfast/CVGenerator-tools) run `docker-compose up` inside `local-dev-env`

- in `imposter_rest` run `docker run -ti -p 8082:8080 -v $(pwd):/opt/imposter/config outofcoffee/imposter-rest`

- in the [frontend](https://github.com/UnosquareBelfast/CVGenerator-frontend) repo checkout the `develop` branch. Start the dev server by running `npm run start:dev` and navigate to the localhost port shown in your chosen browser.
