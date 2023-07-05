import { useEffect, useState } from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.log("*** ERROR", error);
      setHasError(true);
      setErrorMessage(error.message);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return (
      <div className="error-boundary">
        <h2>Error</h2>
        <p>{errorMessage}</p>
        {/* You can provide additional options or actions here */}
      </div>
    );
  }

  return <>{children}</>;
};
