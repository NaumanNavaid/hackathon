describe('ShopPage Component', () => {
  beforeEach(() => {
    // Visit the Shop page (adjust the URL based on your setup)
    cy.visit('/shop'); 
  });

  it('should render the Shop page correctly', () => {
    // Ensure the header and background are loaded
    cy.get('h1').contains('Shop').should('be.visible');
    cy.get('.bg-cover').should('have.length', 1); // Check if background exists

    // Check if the filter and search section is visible
    cy.get('.container').should('be.visible');
    cy.get('.container').find('select').should('exist'); // Ensure filter dropdown exists

    // Check if the product grid is rendered and has items
    cy.get('.grid').should('be.visible'); 
    cy.get('.grid .bg-white').should('have.length.greaterThan', 0); // Ensure products are present

    // Check if pagination buttons exist
    cy.get('.flex').contains('Next').should('be.visible');
    cy.get('.flex').find('button').should('have.length.greaterThan', 0); // Ensure pagination buttons exist
  });

  it('should filter products by category', () => {
    // Ensure the dropdown contains the correct options
    cy.get('select')
      .children()
      .should('have.length', 5) // "All", "Sofa", "Chair", "Bed"
      .and('contain', 'All Categories')
      .and('contain', 'Sofa')
      .and('contain', 'Chair')
      .and('contain', 'Bed');

    // Select "Sofa" category from the dropdown and check if products are filtered
    cy.get('select').select('Sofa').should('have.value', 'Sofa');
    
    // Verify the filtered products are displayed (adjust based on your products data)
    cy.get('.grid .bg-white').should('have.length.greaterThan', 0); // Expect products to appear

    // Select "Chair" category
    cy.get('select').select('Chair').should('have.value', 'Chair');

    // Ensure products filtered by "Chair" are shown
    cy.get('.grid .bg-white').should('have.length.greaterThan', 0);
  });

  it('should search products correctly', () => {
    // Target the search input field more specifically
    cy.get('input[placeholder="Search products..."]').type('Sofa'); // Using placeholder to target the search input
  
    // Check if the product names or descriptions contain the search query
    cy.get('.grid .bg-white').each(($product) => {
      cy.wrap($product)
        .find('h2') // Assuming the product name is inside <h2> element
        .should('include.text', 'Sofa'); // Adjust this based on your test query
    });
  });
    
  it('should check pagination and disable the next button on the last page', () => {
    // Set the viewport size to simulate a larger screen
    cy.viewport(1024, 768);  // Adjust for the 'lg' breakpoint or any large screen

    // Wait for the page content to load
    cy.wait(1000);

    // Ensure the grid has products
    cy.get('.grid .bg-white').should('have.length.greaterThan', 0);

    // Force the parent container to be visible
    cy.get('.hidden.lg\\:flex')  // Escape the colon in 'lg:flex'
        .invoke('css', 'display', 'flex'); // Force the parent div to be visible

    // Ensure the first page button is visible and has the correct class
    cy.get('.flex button')
        .first()
        .should('be.visible') // Ensure the button is visible
        .should('exist')  // Ensure the button exists
        .then(($button) => {
            // Debugging: Log the button's classes to check if it's applied correctly
            console.log($button[0].className);
            expect($button).to.have.class('bg-[#FBEBB5]');  // Ensure first page button is highlighted
        });

    // Get all numbered pagination buttons to determine total pages
    cy.get('.flex button').not(':contains("Next")').then($buttons => {
        const totalPages = $buttons.length;

        // Click through all pages except the last one
        for (let i = 1; i < totalPages; i++) {
            cy.get('.flex button').contains('Next').click();

            // Verify current page is active
            cy.get('.flex button')
                .contains(String(i + 1))
                .should('have.class', 'bg-[#FBEBB5]');
        }

        // Verify Next button is disabled on last page
        cy.get('.flex button')
            .contains('Next')
            .should('be.disabled')
            .should('have.class', 'bg-gray-200 cursor-not-allowed'); // Verify disabled styling
    });
});



 });
