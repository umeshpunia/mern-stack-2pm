Razorpay Gateway
    Copy THis
    <script src='https://checkout.razorpay.com/v1/checkout.js'></script>


function checkoutCart(){

    const options = {

    key: 'paste your key here',

    amount: 10*100, // amount should be in paise format i am using here 10 Rupees

    currency: 'INR',

    name: 'My Ecom', // company name or product name

    description: 'hello', // product description

    image: '', // company logo or product image

    modal: {

    // We should prevent closing of the form when esc key is pressed.

    escape: false,

    },

    notes: {

    // include notes if any

    },

    theme: {

    color: '#0c238a'

    }

    };

    options.handler = ((response, error) => {

    options.response = response;

    if(response){

    // api orders

    }

    console.log(response); // do whatever you want to do after response

    console.log(options);

    // call your backend api to verify payment signature & capture transaction

    });

    options.modal.ondismiss = (() => {

    // handle the case when user closes the form while transaction is in progress

    console.log('Transaction cancelled.');

    });

    const rzp = new window.Razorpay(options);

    rzp.open();

    }
