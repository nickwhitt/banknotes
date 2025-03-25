<template>
  <UContainer class="mx-0">
    <h1 class="my-8 text-3xl sm:text-4xl font-semibold tracking-tight">
      Banknotes
    </h1>
    <p class="text-lg/8 my-4 ">
      This site is a passion project for a numismatic collection of U.S. paper currency.
      Issue lists will occasionally have markers (<span class="text-(--ui-success)">√</span>)
      which indicate a piece in my collection. It is my intent that these markers are
      unubtrousive and easily ignored.
    </p>

    <h2 class="my-6 text-xl sm:text-2xl font-semibold tracking-tight">
      Legal Tender
    </h2>

    <p class="text-base/6 my-4">
      Prior to the outbreak of Civil War, the U.S. government had declined to print paper currency; instead relying on
      the Mint to coin silver and gold specie for circulating tender. With the Union still recovering from the banking
      Panic of 1857, the federal treasury was unable to meet the day-to-day demands of funding a government at war.
      Congress had many times before authorized the printing and sale of interest-bearing Treasury Notes, similar to
      government bonds; but lacked the time it would take to convert these notes into hard coin.
    </p>
    <p class="text-base/6 my-4">
      In 1861, Congress authorized the printing of non-interest-bearing notes, payable on demand to the holder in silver
      or gold coin. These "Demand Notes" were offered as payment for debts of the government in the form of a "promise
      to pay bearer" at a later time; making Demand Notes freely transferable from person-to-person. The following year,
      Congress officially designated outstanding Demand Notes legal tender and authorized a new type of United States
      Notes to be printed instead of new Demand Notes. Paper fiat currency had been adopted, backed by the faith of
      reserve deposits of silver and gold in treasury vaults. All U.S. currency issued since 1861 remains valid and
      redemable at face value.
    </p>

    <h2 class="my-6 text-xl sm:text-2xl font-semibold tracking-tight">
      Bureau of Engraving and Printing
    </h2>

    <p class="text-base/6 my-4">
      Demand Notes and early United States Notes were printed by contract with private companies for the first few years
      of production. Additional overprinting of serial numbers and seals was performed by the Treasury Department prior
      to issue. In 1874, the Bureau of Engraving and Printing (BEP) was created for the production of secure government
      documents and took over full printing of currency by 1877. To this day, paper (or substrate) is produced by
      private contract exclusively for the BEP; all other materials including ink, printing plates, and presses are
      owned and operated by the BEP. Though designs and equipment have changed drastically, the printing process itself
      has remained largely the same--a layered, multi-step production to create the final note; comprising offset
      ink-based printing of colored designs, intaglio pressing of green backs followed by faces in black, and colored
      overprinting of face elements (including serial numbers and seals).
    </p>

    <p class="text-base/6 my-4">
      Unlike coins which are produced with the issuing year as part of the design, banknotes are printed in multi-year
      series which are named for the authorization year. For example, Series 1993 notes were printed April 1994
      through May 1997 according to production figures released by the BEP. Without an accompanying production report,
      it is impossible to tell the month or year a given note was printed. A new series is introduced with a major
      update to the note type, such as an image, color, or paper redesign; a suffix letter will be added or incremented
      with minor note changes, including new signatures or production processes. Until recently, there were multiple
      types of notes in circulation: United States (or Legal Tender) Notes, National and Federal Reserve Bank Notes,
      Silver Certificates, and even Gold Certificates; in addition to the familiar Federal Reserve Notes.
    </p>

    <p class="text-base/6 my-4">
      Notes are printed by powered presses operating at high speed and pressure. A metalic plate is compressed into a
      single sheet, transferring the etched image of multiple notes deep into the paper. Each image on the face plate is
      engraved with a letter or letter-number identifier to indicate the plate position for the resulting note. A unique
      plate number on both the face and the back of the note identify both plates used to produce the note. Some notes
      have been identified with mismatched face-back plate numbers from differing series, presses, or print runs. These
      "mules" are sought after by specialized collectors.
    </p>

    <p class="text-base/6 my-4">
      Initially printed
      <ULink active @click="fourByOpen = true">four per sheet</ULink>, new presses were introduced in 1918 with plates
      large enough to print
      <ULink active @click="eightByOpen = true">eight notes per sheet</ULink>. In 1929, federal currency was reduced in
      size by 30%, allowing
      <ULink active @click="twelveByOpen = true">twelve "small" notes</ULink> to be printed on the same size sheet as
      eight "large" notes. Beginning in 1952, new technologies were introduced to prevent distortion of notes during the
      intaglio wetting and drying process, allowing for
      <ULink active @click="eighteenByOpen = true">18-subject sheets</ULink> to be used. By 1957, the distortion was
      completely eliminated, and
      <ULink active @click="thirtyTwoByOpen = true">32-subject sheets</ULink> were standardized for all denominations.
      Most recently,
      <ULink active @click="fiftyByOpen = true">50-subject sheets</ULink> were introduced in 2014.
    </p>

    <p class="text-base/6 my-4">
      Finished sheets are stacked in batches, then precisely cut into single-note stacks. Each stack of notes has been
      printed such that the serial numbers are already in sequential order. This means that the notes on a single sheet
      do not have sequential serial numbers, but are instead skip-ordered based on the size of the print run itself. For
      example, if a print run consists of 20,000 sheets, serial numbers of each note on a single sheet would increment
      by 20,000 per plate position. As such, each stacked group of sequentially numbered notes will have the same plate
      position.
    </p>

    <h2 class="my-6 text-xl sm:text-2xl font-semibold tracking-tight">
      Western Facility
    </h2>

    <p class="text-base/6 my-4">
      With the BEP running out of space in their Washington, D.C. headquarters, the decision was made to open a "Western
      Facility" in Fort Worth, Texas. Beginning production in 1990, this was the first federal facility to print
      currency outside of the seat of government. Similar to coins produced at branches of the U.S. Mint, notes printed
      at the Western Facility have a facility mark of <span class="font-mono">FW</span> next to the face plate number.
    </p>

    <h2 class="my-6 text-xl sm:text-2xl font-semibold tracking-tight">
      Federal Reserve
    </h2>

    <p class="text-base/6 my-4">
      The Federal Reserve System is a central banking authority created by the Federal Reserve Act of 1913 to monitor
      and regulate U.S. regional banks. It is proportioned into twelve regional districts each headed up by a Federal
      Reserve Bank. Created by Congress to avoid financial crises of the federal monetary system, such as the banking
      Panic of 1907, each Federal Reserve Bank is tasked with issuing Federal Reserve Notes to private banks within its
      district to facilitate commerce transactions. As such, the BEP no longer issues currency; rather, it produces
      currency for and at the request of individual Federal Reserve Banks.
    </p>

    <h2 class="my-6 text-xl sm:text-2xl font-semibold tracking-tight">
      Serial Numbers
    </h2>

    <p class="text-base/6 my-4">
      Serial numbers are required to be on all notes printed by the BEP, both as a way to prevent counterfeiting as well
      as to help the Federal Reserve track the notes in circulation. Each note of the same type, denomination, and
      series has a unique serial number following a specific formula. In the case of Federal Reserve Notes, the
      eight-digit serial number begins and ends with a letter, such as <span class="font-mono">A01234567A</span>. The
      letter prefix indicates which <ULink active @click="frbOpen = true">Federal Reserve Bank</ULink> issued the note,
      while the letter suffix advances for every 100,000,000 notes printed; though neither the letters
      <span class="font-mono">O</span> or <span class="font-mono">Z</span> are used. Beginning with Series 1996, a
      <ULink active @click="seriesOpen = true">series letter</ULink> was prepended to the serial number for all
      denominations of five-dollars and higher, such as <span class="font-mono">QA01234567A</span>. The combination of
      prefix and suffix letters create "blocks" of notes; a note with serial number
      <span class="font-mono">PD01234567C</span> would be part of the <span class="font-mono">PDC</span> block.
    </p>

    <p class="text-base/6 my-4">
      Sometimes a note must be pulled from the finished stack due to a print error; it will be replaced by a "star"
      note--one where the letter suffix is replaced with a star, like <span class="font-mono">A01234567*</span>.
      Entire sheets are sometimes replaced in the same way. No attempt is made to match serial numbers replaced by
      star notes, and no records are kept as to which serial numbers were replaced. As printing errors are infrequent,
      star notes are comparitively rare in circulation.
    </p>

    <UModal v-model:open="frbOpen" title="Federal Reserve Banks">
      <template #body>
        <UTable :columns="frbColumns" :data="Object.values(banks)" />
      </template>
    </UModal>

    <UModal v-model:open="fourByOpen" title="Four-Subject Sheet">
      <template #body>
        <div class="grid sm:grid-cols-3 gap-2 justify-items-center">
          <p class="sm:col-span-2">
            One column of four notes with plate positions A through D.
          </p>
          <ol class="table table-fixed w-16 border-collapse">
            <li v-for="cell in 'ABCD'.split('')" class="table-row text-center">
              <p class="table-cell border">{{ cell }}</p>
            </li>
          </ol>
        </div>
      </template>
    </UModal>

    <UModal v-model:open="eightByOpen" title="Eight-Subject Sheet">
      <template #body>
        <div class="grid sm:grid-cols-3 gap-2 justify-items-center">
          <p class="sm:col-span-2">
            Two columns of four notes with plate positions A through H.
          </p>
          <ol class="table table-fixed w-32 border-collapse">
            <li class="table-row text-center" v-for="cells in [
              ['A', 'E'], ['B', 'F'], ['C', 'G'], ['D', 'H']
            ]">
              <p v-for="cell in cells" class="table-cell border">{{ cell }}</p>
            </li>
          </ol>
        </div>
      </template>
    </UModal>

    <UModal v-model:open="twelveByOpen" title="Twelve-Subject Sheet">
      <template #body>
        <div class="grid sm:grid-cols-3 gap-2 justify-items-center">
          <p class="sm:col-span-2">
            Two columns of six notes with plate positions A through L.
          </p>
          <ol class="table table-fixed w-32 border-collapse">
            <li class="table-row text-center" v-for="cells in [
              ['A', 'G'], ['B', 'H'], ['C', 'I'], ['D', 'J'], ['E', 'K'], ['F', 'L']
            ]">
              <p v-for="cell in cells" class="table-cell border">{{ cell }}</p>
            </li>
          </ol>
        </div>
      </template>
    </UModal>

    <UModal v-model:open="eighteenByOpen" title="Eighteen-Subject Sheet">
      <template #body>
        <div class="grid sm:grid-cols-2 gap-2 justify-items-center">
          <p class="">
            Three columns of six notes with plate positions A through R.
          </p>
          <ol class="table table-fixed w-48 border-collapse">
            <li class="table-row text-center" v-for="cells in [
              ['A', 'G', 'M'], ['B', 'H', 'N'], ['C', 'I', 'O'], ['D', 'J', 'P'], ['E', 'K', 'Q'], ['F', 'L', 'R']
            ]">
              <p v-for="cell in cells" class="table-cell border">{{ cell }}</p>
            </li>
          </ol>
        </div>
      </template>
    </UModal>

    <UModal v-model:open="thirtyTwoByOpen" title="Thirty-Two-Subject Sheet">
      <template #body>
        <div class="grid sm:grid-cols-2 gap-2 justify-items-center">
          <p class="">
            Arranged by quandrants, 1 through 4; where each quandrant is comprised of two columns of four notes, A
            through H. Plate position is a combination of column-row-letter and quandrant-number.
          </p>
          <div class="flex flex-wrap gap-1 justify-center max-w-50">
            <ol v-for="quad in [1, 3, 2, 4]" class="table table-fixed w-24 border-collapse">
              <li class="table-row text-center" v-for="cells in [['A', 'E'], ['B', 'F'], ['C', 'G'], ['D', 'H']]">
                <p v-for="cell in cells" class="table-cell border">{{ cell }}{{ quad }}</p>
              </li>
            </ol>
          </div>
        </div>
      </template>
    </UModal>

    <UModal v-model:open="fiftyByOpen" title="Fifty-Subject Sheet">
      <template #body>
        <div class="grid sm:grid-cols-3 gap-2 justify-items-center">
          <p class="">
            Five columns, labled 1 through 5, with ten rows of notes A through J. Plate position is a grid-cordinate
            system of row letter by column number.
          </p>
          <ol class="sm:col-span-2 table table-fixed w-60 border-collapse">
            <li v-for="row in 'ABCDEFGHIJ'.split('')" class="table-row text-center">
              <p v-for="col in [1, 2, 3, 4, 5]" class="table-cell border">{{ row }}{{ col }}</p>
            </li>
          </ol>
        </div>
      </template>
    </UModal>

    <UModal v-model:open="seriesOpen" title="Series Year and Prefix Letter">
      <template #body>
        <UTable :data="seriesPrefixes">
          <template #denominations-cell="{ row }">
            <ul class="flex flex-wrap gap-2">
              <li v-for="denom in row.original.denominations">
                ${{ denom }}
              </li>
            </ul>
          </template>
        </UTable>
      </template>
    </UModal>

    <PageFooter />
  </UContainer>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import { banks, type Bank } from '~~/types/Bank'

const frbOpen = ref(false)
const seriesOpen = ref(false)

const fourByOpen = ref(false)
const eightByOpen = ref(false)
const twelveByOpen = ref(false)
const eighteenByOpen = ref(false)
const thirtyTwoByOpen = ref(false)
const fiftyByOpen = ref(false)

const frbColumns: TableColumn<Bank>[] = [
  { accessorKey: 'city', header: 'Bank', cell: ({ row }) => row.original.city + ', ' + row.original.state },
  { accessorKey: 'letter', header: 'Letter' },
  { accessorKey: 'number', header: 'Number' },
]

const seriesPrefixes = [
  { series: '1996', prefix: 'A', denominations: [20, 50, 100] },
  { series: '1999', prefix: 'B', denominations: [5, 10, 20, 100] },
  { series: '2001', prefix: 'C', denominations: [5, 10, 20, 50, 100] },
  { series: '2003', prefix: 'D', denominations: [10, 100] },
  { series: '2004', prefix: 'E', denominations: [20, 50] },
  { series: '2003-A', prefix: 'F', denominations: [5, 100] },
  { series: '2004-A', prefix: 'G', denominations: [10, 20, 50] },
  { series: '2006', prefix: 'H', denominations: [5, 100] },
  { series: '2006', prefix: 'I', denominations: [5, 10, 20, 50] },
  { series: '2009', prefix: 'J', denominations: [10, 20, 50, 100] },
  { series: '2006-A', prefix: 'K', denominations: [100] },
  { series: '2009-A', prefix: 'L', denominations: [100] },
  { series: '2013', prefix: 'M', denominations: [5, 10, 20, 50, 100] },
  { series: '2017', prefix: 'N', denominations: [10, 20] },
  { series: '2017-A', prefix: 'P', denominations: [5, 10, 20, 50, 100] },
  { series: '2021', prefix: 'Q', denominations: [5] },
]
</script>
