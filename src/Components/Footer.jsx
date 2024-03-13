import React from 'react';

const Footer = () => {
  return (
    <div className="w-full mt-auto bg-gray-200 py-4"> {/* Add a background color, vertical padding, and ensure it sticks to the bottom if using a flex container */}
      <div className="text-center">
        <h5 className="text-sm text-gray-600"> {/* Adjust text size and color */}
          Copyright © 2024 NayePankh Foundation
        </h5>
      </div>
    </div>
  );
}

export default Footer;

