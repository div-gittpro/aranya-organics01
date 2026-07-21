import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12 w-12" }: LogoProps) {
  return (
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBGPrW_X5FVA39qJGj0PS0lTypK5dy4d0dz84yVX3Kj6DWgo4HNzrrYdB__EyBteiwvx-GXAwTjm89Nv-emATHxy5OcCcty9Zhaqco_e9_ERjJ7vAK6as70eNP0MIW7AX6oCjiSUPF9kLp-gqDXCzVSm1H_S-BBfEGmRRWXf8ATeOdT9QkKSCbb-t0rbKRywQZgFfYQqM8YaNeA_jbOKvqcxhtQ5c6-tyE0d-6mw2W1yEF9B6L0NzHBR01Oxdpj8wwKg"
      alt="Aranya Organic"
      className={`${className} rounded-full object-cover`}
      referrerPolicy="no-referrer"
    />
  );
}

