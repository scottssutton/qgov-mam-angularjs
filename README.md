[![devDependency Status](https://david-dm.org/qld-gov-au/qgov-mam-angularjs/dev-status.svg)](https://david-dm.org/qld-gov-au/qgov-mam-angularjs#info=devDependencies)

# MAM template in AngularJS

This repo is provided as a sample for pulling data from the [Queensland Government open data portal][data] and presenting it in the MAM (Medium Awesome Map) page template.

## Installation

1. `npm install -g grunt-cli`
2. `npm install`
3. `grunt install`

## Development

1. `grunt dev`
2. Go to: `http://localhost:8888`

## Testing

### Run all tests with
`grunt test` 

### Unit Testing

#### Single run tests
`grunt test:unit` 

#### Auto watching tests
`grunt autotest:unit`

### End to End Testing (Protractor)

- Keep webdriver up to date: `grunt shell:protractor_install`

#### Single run tests
`grunt test:e2e` 

#### Auto watching tests
`grunt autotest:e2e`

### Coverage Testing

`grunt coverage`


> ## Based on [Yearofmoo AngularJS Seed Repo][seed].
>
> A starter AngularJS repository for getting started with AngularJS. Includes  helpful unit testing tools, Protractor integration and coverage testing.


[data]: https://data.qld.gov.au
[seed]: https://github.com/yearofmoo/angularjs-seed-repo