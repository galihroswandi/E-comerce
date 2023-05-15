const Button = ({ setCheckout }) => {
  const handleClickCheckout = () => {
    setCheckout(true);
  };

  return (
    <button
      type="button"
      onClick={handleClickCheckout}
      className="bg-green-500 min-w-full py-2 px-1 text-sm md:text-base text-white rounded-sm active:bg-green-600"
    >
      Checkout
    </button>
  );
};

export default Button;
