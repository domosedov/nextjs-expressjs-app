const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <button>{children}</button>
      <style jsx>{`
        button {
          display: block;
          margin: auto;
          background-color: blue;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          border: 5px solid yellow;
          font-size: 40px;
        }

        button:hover {
          transition: all 0.2s ease;
          background-color: green;
        }
      `}</style>
    </>
  );
};

export default Button;
