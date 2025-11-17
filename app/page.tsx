import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";
import { cn } from "@/lib/utils";
const page = ({className}:{className?:string}) => {
  return (
    <Container className={cn("w-full", className)}>
      <h1 className="text-xl font-semibold">HOME PAGE</h1>
      <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nulla ducimus, fuga nemo explicabo repellat necessitatibus soluta porro sint nihil at dolorum quae ea vero, corporis error ratione perferendis assumenda delectus beatae, eligendi fugit! Atque cum provident odio minima facere? Deserunt, expedita nostrum aperiam recusandae accusantium autem laboriosam doloribus exercitationem maiores quasi, nam temporibus aliquam cumque rem, eos perspiciatis provident. Illum nobis, sed, architecto consequatur illo similique accusantium, est animi earum magni cum quis vel nisi quas incidunt hic enim! Earum quia quaerat repellendus quasi consequuntur vel voluptate accusantium, ducimus ullam repudiandae doloribus cumque fuga saepe, veniam recusandae culpa quisquam.

      </p>
      <Button variant="outline" className="bg-shop_btn_green" size="lg">Click Me</Button>
      <Button variant="outline" className="bg-shop_btn_green" size="lg">Click Me</Button>
    </Container>
  );
};

export default page;
