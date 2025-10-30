import Image from "next/image"

export function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
          {/* BIMachine Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/bimachine-logo.png"
              alt="BIMachine"
              width={180}
              height={40}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </div>

          {/* iAMachine Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/iamachine-logo.png"
              alt="iAMachine"
              width={180}
              height={40}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  )
}
