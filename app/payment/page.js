
const Payment = () => {
    return (
        <div className="container mx-auto pb-16 pt-40">
            <h1 className="text-3xl font-bold text-primary mb-8">Make a Payment</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-primary mb-4">bKash Payment</h2>
                    <p className="text-gray-600 mb-4">
                        To make a payment using bKash, please follow the instructions below:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>Open your bKash app on your mobile phone.</li>
                        <li>Select the "Send Money" option.</li>
                        <li>Enter the recipient's bKash number: [Your bKash Number].</li>
                        <li>Enter the payment amount: [Amount].</li>
                        <li>Include your order/reference number in the "Reference" field.</li>
                        <li>Review the payment details and confirm the transaction.</li>
                        <li>Your payment will be processed.</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-primary mb-4">Nagad Payment</h2>
                    <p className="text-gray-600 mb-4">
                        To make a payment using Nagad, please follow the instructions below:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>Open your Nagad app on your mobile phone.</li>
                        <li>Select the "Send Money" option.</li>
                        <li>Enter the recipient's Nagad number: [Your Nagad Number].</li>
                        <li>Enter the payment amount: [Amount].</li>
                        <li>Include your order/reference number in the "Reference" field.</li>
                        <li>Review the payment details and confirm the transaction.</li>
                        <li>Your payment will be processed.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Payment;

