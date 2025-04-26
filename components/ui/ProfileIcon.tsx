import Image from 'next/image';

type ProfileIconProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export default function ProfileIcon({ src, alt, size = 40, className = '' }: ProfileIconProps) {
  return (
    <div className={`rounded-full overflow-hidden ${className}`} style={{ width: size, height: size }}>
      <Image 
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
        // Add blur placeholder for better perceived loading performance
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=="
      />
    </div>
  );
}