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

    <h2 class="my-6 text-2xl sm:text-3xl font-semibold tracking-tight">
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
      In 1861, Congress authorized the printing of non-interest-bearing notes, payable on demand to the holder in gold
      coin. These "Demand Notes" were offered as payment for debts of the government in the form of a "promise to pay
      bearer" at a later time; making Demand Notes freely transferable from person-to-person. The following year,
      Congress officially designated outstanding Demand Notes legal tender and authorized United States Notes to be
      printed instead of new Demand Notes. Paper fiat currency had been adopted, backed by the faith of reserve deposits
      of silver and gold in treasury vaults. All U.S. currency issued since 1861 remains valid and redemable at face
      value.
    </p>

    <h2 class="my-6 text-2xl sm:text-3xl font-semibold tracking-tight">
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
      Notes are printed multiple to a sheet through powered presses operating at high speed and pressure. Each note
      indicates a plate position--either a letter or a letter-number combination to show its original position on a
      sheet. Initially printed
      <ULink active @click="fourByOpen = true">four per sheet</ULink>, new presses were introduced in 1918 accepting
      sheets large enough to print
      <ULink active @click="eightByOpen = true">eight notes per sheet</ULink>. In 1929, federal currency was reduced in
      size by 30%, allowing
      <ULink active @click="twelveByOpen = true">twelve "small" notes</ULink> to be printed on the same size sheet as
      eight "large" notes. Beginning in 1952, new technologies and processes were introduced to prevent distortion of
      notes during the intaglio wetting and drying process, allowing for
      <ULink active @click="eighteenByOpen = true">18-subject sheets</ULink> to be used. By 1957, the distortion was
      completely eliminated using rotary presses, and
      <ULink active @click="thirtyTwoByOpen = true">32-subject sheets</ULink> were standardized for all presses. Most
      recently,
      <ULink active @click="fiftyByOpen = true">50-subject sheets</ULink> were introduced in 2014.
    </p>

    <p class="text-base/6 my-4">
      Finished sheets are stacked in batches of 100, then precisely cut into single-note stacks. Each stack of 100 notes
      has been printed such that the serial numbers are already in sequential order. This means that the notes on a
      single sheet do not have sequential serial numbers, but are instead skip-ordered based on the size of the print
      run itself. For example, if a print run consists of 40,000 sheets, serial numbers of each note on a single sheet
      would increment by 40,000 per plate position. Additionally, each stacked group of sequentially numbered notes will
      have the same plate position.
    </p>

    <h2 class="my-6 text-2xl sm:text-3xl font-semibold tracking-tight">
      Federal Reserve
    </h2>

    <p class="text-base/6 my-4">
      The Federal Reserve System is a central banking authority created by the Federal Reserve Act of 1913 to monitor
      and regulate U.S. regional banks. It was created by Congress to avoid financial crises of the federal monetary
      system, such as the banking Panic of 1907; and is proportioned into twelve regional districts each headed up by a
      Federal Reserve Bank. Among other responsibilities, each Federal Reserve Bank is tasked with issuing Federal
      Reserve Notes to private banks within its district to facilitate commerce transactions. All Federal Reserve Notes
      bear an
      <ULink active @click="frbOpen = true">identifying mark</ULink> to indicate which Federal Reserve Bank issued the
      note via one of its constituent member banks.
    </p>

    <h2 class="my-6 text-2xl sm:text-3xl font-semibold tracking-tight">
      Serial Numbers
    </h2>

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
            <li class="table-row text-center">
              <p class="table-cell border">A</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">B</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">C</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">D</p>
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
            <li class="table-row text-center">
              <p class="table-cell border">A</p>
              <p class="table-cell border">E</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">B</p>
              <p class="table-cell border">F</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">C</p>
              <p class="table-cell border">G</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">D</p>
              <p class="table-cell border">H</p>
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
            <li class="table-row text-center">
              <p class="table-cell border">A</p>
              <p class="table-cell border">G</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">B</p>
              <p class="table-cell border">H</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">C</p>
              <p class="table-cell border">I</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">D</p>
              <p class="table-cell border">J</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">E</p>
              <p class="table-cell border">K</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">F</p>
              <p class="table-cell border">L</p>
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
            <li class="table-row text-center">
              <p class="table-cell border">A</p>
              <p class="table-cell border">G</p>
              <p class="table-cell border">M</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">B</p>
              <p class="table-cell border">H</p>
              <p class="table-cell border">N</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">C</p>
              <p class="table-cell border">I</p>
              <p class="table-cell border">O</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">D</p>
              <p class="table-cell border">J</p>
              <p class="table-cell border">P</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">E</p>
              <p class="table-cell border">K</p>
              <p class="table-cell border">Q</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">F</p>
              <p class="table-cell border">L</p>
              <p class="table-cell border">R</p>
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
            <ol class="table table-fixed w-24 border-collapse">
              <li class="table-row text-center">
                <p class="table-cell border">A1</p>
                <p class="table-cell border">E1</p>
              </li>
              <li class="table-row text-center">
                <p class="table-cell border">B1</p>
                <p class="table-cell border">F1</p>
              </li>
              <li class="table-row text-center">
                <p class="table-cell border">C1</p>
                <p class="table-cell border">G1</p>
              </li>
              <li class="table-row text-center">
                <p class="table-cell border">D1</p>
                <p class="table-cell border">H1</p>
              </li>
            </ol>
            <ol class="table table-fixed w-24 border-collapse">
              <li class="table-row text-center">
                <p class="table-cell border">A3</p>
                <p class="table-cell border">E3</p>
              </li>
              <li class="table-row text-center">
                <p class="table-cell border">B3</p>
                <p class="table-cell border">F3</p>
              </li>
              <li class="table-row text-center">
                <p class="table-cell border">C3</p>
                <p class="table-cell border">G3</p>
              </li>
              <li class="table-row text-center">
                <p class="table-cell border">D3</p>
                <p class="table-cell border">H3</p>
              </li>
            </ol>
            <ol class="table table-fixed w-24 border-collapse">
              <li class="table-row text-center">
                <p class="table-cell border">A2</p>
                <p class="table-cell border">E2</p>
              </li>
              <li class="table-row text-center">
                <p class="table-cell border">B2</p>
                <p class="table-cell border">F2</p>
              </li>
              <li class="table-row text-center">
                <p class="table-cell border">C2</p>
                <p class="table-cell border">G2</p>
              </li>
              <li class="table-row text-center">
                <p class="table-cell border">D2</p>
                <p class="table-cell border">H2</p>
              </li>
            </ol>
            <ol class="table table-fixed w-24 border-collapse">
              <li class="table-row text-center">
                <p class="table-cell border">A4</p>
                <p class="table-cell border">E4</p>
              </li>
              <li class="table-row text-center">
                <p class="table-cell border">B4</p>
                <p class="table-cell border">F4</p>
              </li>
              <li class="table-row text-center">
                <p class="table-cell border">C4</p>
                <p class="table-cell border">G4</p>
              </li>
              <li class="table-row text-center">
                <p class="table-cell border">D4</p>
                <p class="table-cell border">H4</p>
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
            <li class="table-row text-center">
              <p class="table-cell border">A1</p>
              <p class="table-cell border">A2</p>
              <p class="table-cell border">A3</p>
              <p class="table-cell border">A4</p>
              <p class="table-cell border">A5</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">B1</p>
              <p class="table-cell border">B2</p>
              <p class="table-cell border">B3</p>
              <p class="table-cell border">B4</p>
              <p class="table-cell border">B5</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">C1</p>
              <p class="table-cell border">C2</p>
              <p class="table-cell border">C3</p>
              <p class="table-cell border">C4</p>
              <p class="table-cell border">C5</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">D1</p>
              <p class="table-cell border">D2</p>
              <p class="table-cell border">D3</p>
              <p class="table-cell border">D4</p>
              <p class="table-cell border">D5</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">E1</p>
              <p class="table-cell border">E2</p>
              <p class="table-cell border">E3</p>
              <p class="table-cell border">E4</p>
              <p class="table-cell border">E5</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">F1</p>
              <p class="table-cell border">F2</p>
              <p class="table-cell border">F3</p>
              <p class="table-cell border">F4</p>
              <p class="table-cell border">F5</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">G1</p>
              <p class="table-cell border">G2</p>
              <p class="table-cell border">G3</p>
              <p class="table-cell border">G4</p>
              <p class="table-cell border">G5</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">H1</p>
              <p class="table-cell border">H2</p>
              <p class="table-cell border">H3</p>
              <p class="table-cell border">H4</p>
              <p class="table-cell border">H5</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">I1</p>
              <p class="table-cell border">I2</p>
              <p class="table-cell border">I3</p>
              <p class="table-cell border">I4</p>
              <p class="table-cell border">I5</p>
            </li>
            <li class="table-row text-center">
              <p class="table-cell border">J1</p>
              <p class="table-cell border">J2</p>
              <p class="table-cell border">J3</p>
              <p class="table-cell border">J4</p>
              <p class="table-cell border">J5</p>
            </li>
          </ol>
        </div>
      </template>
    </UModal>

    <PageFooter />
  </UContainer>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import { banks, type Bank } from '~~/types/Bank'

const frbOpen = ref(false)
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
</script>
