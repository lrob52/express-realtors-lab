let apartments = [
    {
        "property": "The Residences at Harbor Town",
        "neighborhood": "East Little Rock",
        "rent": "$1,348-$2,799",
        "sqFt": "889-1,167 sq ft",
        "bedrooms": "1-3bd",
        "bathrooms": "1-2ba"
    },
    {
        "property": "Bowman Pointe",
        "neighborhood": "West Little Rock",
        "price": "$981-$4,394",
        "sqFt": "389-1,460 sq ft",
        "bedrooms": "Studio-3bd",
        "bathrooms": "1-3ba"
    },
    {
        "property": "Fitzroy Riverdale",
        "neighborhood": "Riverdale",
        "price": "Call for Rent",
        "sqFt": "N/A",
        "bedrooms": "1-2bd",
        "bathrooms": "1-2ba"
    },
    {
        "property": "Chenal Pointe at the Divide",
        "neighborhood": "West Little Rock",
        "price": "$1,063-$1,925",
        "sqFt": "681-1,103 sq ft",
        "bedrooms": "1-2bd",
        "bathrooms": "1-2ba"
    },
    {
        "property": "Forest Place",
        "neighborhood": "Heights",
        "price": "$1,111-$2,014",
        "sqFt": "556-1,879 sq ft",
        "bedrooms": "1-3bd",
        "bathrooms": "1-2ba"
    }
];

function getAll() {
    return apartments;
};

function getOne(property) {
    return apartments.find(apartment => apartment.property === property);
};

module.exports = {getAll, getOne};