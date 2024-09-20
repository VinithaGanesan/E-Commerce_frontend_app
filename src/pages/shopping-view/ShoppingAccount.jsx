import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import accountImg from "../../assets/men-s-clothing-hanger-fashion-store_795422-8373.avif";
import { TabsTrigger } from "@radix-ui/react-tabs";
import Orders from "@/components/shopping-view/Orders";
import Address from "@/components/shopping-view/Address";

export default function ShoppingAccount() {
  return (
    <div className="flex flex-col">
      <div className="relative h-[350px] w-full overflow-hidden">
        <img
          width={"1600"}
          height={"300"}
          src={accountImg}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 py-8">
        <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
          <Tabs defaultValue="orders">
            <TabsList>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="address">Address</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
              <Orders />
            </TabsContent>
            <TabsContent value="address">
              <Address />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
