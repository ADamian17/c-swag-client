# AD-SWAG Clothing
### User Stories
- User will land in the main gallery
- in the gallery the user will see all products
- in the top ot the page the user can use the navagation bar to navegati the app
- by clicking in one of the product the user can see the product details
- in the product details the user can add the product to the cart 
- by clicking in the cart the user can see the items that they added 
- if the cart is epmty the user can not see go to checkout button
- else show go to checkout button
- at checkout the user can choose to check out as guess
- user will need to provide address, phone #, and email   
  

### MVP
- Customer can view products
- Customer can add products to cart
- Customer can make an order
- Customer can view/track order

### Takes away
- Usage of commercial APIs suite
- Understanding of common API patterns and architecture
- Understanding of data structures, JSON creation and consumption
- Commercial cart flow from a developer's perspective
- Exposure to a payment provider's processing flow

[ Data Flow ](./react.drawio)


<!-- TODO -->
<!-- choose a payment gateway provider (i.e. Stripe or Paypal) -->
### Resources
[ api reference by Rapiapi clothes ](https://rapidapi.com/apidojo/api/hm-hennes-mauritz?endpoint=apiendpoint_2ac3208c-3dd6-4ef5-8fd4-63fc4d599088)


```javascript
/* fetch example */
const [ allMakeup, setAllMakeup ] = useState([]);

  useEffect(() => {
    fetMakeup()
  }, [])

  const fetMakeup = async () => {
    try {

      const res = await fetch("https://makeup.p.rapidapi.com/products.json", {
        headers: {
          "x-rapidapi-key": "15e17ee08dmsh62fb1686560c453p107df8jsn42ae32d3fd24",
          "x-rapidapi-host": "makeup.p.rapidapi.com",
          "useQueryString": true
        }
      });

      const data = await res.json();

      const lipLiner = data.filter((item) => item.category === 'pencil' );
      console.log({lipLiner});

      setAllMakeup(lipLiner);
      
    } catch (error) {
      
    }
  }
```