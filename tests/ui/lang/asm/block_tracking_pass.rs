// Tests validating tracking of basic blocks
// within the `asm!` macro.
// build-pass

use spirv_std as _;

fn asm_label() {
    unsafe {
        asm!(
            "OpReturn",          // close active block
            "%unused = OpLabel", // open new block
        );
    }
}

fn asm_noreturn_single() -> ! {
    unsafe {
        asm!(
            "OpKill", // close active block
            options(noreturn),
        );
    }
}

#[spirv(fragment)]
pub fn main() {
    asm_label();
    asm_noreturn_single();
}
