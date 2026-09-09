import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import { LOGO_URL } from "@/lib/campaign";

export default function Logo({ size = 44, className, withRing = true }) {
  return (
    <span
      className={cn(
        "relative inline-block rounded-full overflow-hidden",
        withRing && "ring-1 ring-hope/40",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={LOGO_URL}
        alt="Fuad Atanda Lawal — FAL 2027 campaign emblem"
        fittingType="fill"
        className="w-full h-full block"
      />
    </span>
  );
}