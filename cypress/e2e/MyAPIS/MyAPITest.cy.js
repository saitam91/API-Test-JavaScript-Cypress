const testData = require('../../fixtures/restCountries.json')

testData.forEach((testData) => {

    describe('API Test', () => {

        it('Validate data from REST Countries API', () => {
            cy.request({
                method: 'GET',
                url: 'https://restcountries.com/v3.1/region/' + testData.Region + '',
            }).then((response) => {
                expect(response.status).to.eq(200)
                const bodyresponse = (response.body)
                for (var i = 0; i < bodyresponse.length; i++) {
                    cy.log('Country: ' + bodyresponse[i].name.common + ' / Region: ' + bodyresponse[i].subregion)
                    cy.wrap(bodyresponse[i].subregion).should('include', testData.Subregion)
                }
                const sizeResponse = bodyresponse.length
                cy.log(sizeResponse + ' countries have been founded for region: ' + testData.Region + '')
            })
        })
    })
})