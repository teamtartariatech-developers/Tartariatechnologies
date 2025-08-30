import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider text-primary-silver mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-accent-gray max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;