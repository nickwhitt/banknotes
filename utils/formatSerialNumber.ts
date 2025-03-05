export default function (serial: number, block: string, bank: string, series: string | undefined): string {
    let serialNumber = serial.toString().padStart(8, "0")

    return `${series}${bank} ${serialNumber.substring(0, 4)} ${serialNumber.substring(4)} ${block}`
  }
